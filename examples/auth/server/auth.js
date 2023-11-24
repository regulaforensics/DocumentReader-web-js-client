import axios from 'axios';
import jwt from 'jsonwebtoken';
import jwkToPem from 'jwk-to-pem';
import { path, find, compose, flip, curryN } from 'ramda';

const verify = curryN(2)(jwt.verify);
const IDP_KEYCLOAK_URL = 'http://keycloak:8080';
const IDP_KEYCLOAK_REALM = 'regula';

const findPublicKeyFromKid = (publicKey) => (kid) => find(isTheRightKid(kid))(publicKey);

const getKid = path(['header', 'kid']);

const decode = compose(curryN(2), flip)(jwt.decode);

const getUserFromPublicKey = (token) => compose(makeUser, verify(token));

const makeUser = ({ sub, preferred_username, email_verified, resource_access, email, name, ...others }) => ({
    id: sub,
    userName: preferred_username,
    emailVerified: email_verified,
    resourceAccess: resource_access,
    email,
    name,
    ...others,
});

const isTheRightKid = (kid) => (publicKey) => publicKey.kid === kid;

const getUserFromJWK = (token) => (jwk) =>
    compose(
        getUserFromPublicKey(token),
        jwkToPem,
        findPublicKeyFromKid(jwk),
        getKid,
        decode({ complete: true }),
    )(token);

export const verifyOffline = (accessToken, options = {}) => {
    const url = `${IDP_KEYCLOAK_URL}/realms/${IDP_KEYCLOAK_REALM}/protocol/openid-connect/certs`;

    return axios
        .get(url)
        .then(path(['data', 'keys']))
        .then(getUserFromJWK(accessToken));
};
