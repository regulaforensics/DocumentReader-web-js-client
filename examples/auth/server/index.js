import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import axios from "axios";
import jwt from "jsonwebtoken";
import jwkToPem from "jwk-to-pem";
import { prop, path, find, compose, flip, curryN } from "ramda";

const app = express();

const verify = curryN(2)(jwt.verify);
const IDP_KEYCLOAK_URL = "http://keycloak:8080"

const IDP_KEYCLOAK_REALM = "regula"


const findPublicKeyFromKid = publicKey => kid =>
  find(isTheRightKid(kid))(publicKey);

const getKid = path(["header", "kid"]);

const decode = compose(
  curryN(2),
  flip
)(jwt.decode);

const getUserFromPublicKey = token =>
  compose(
    makeUser,
    verify(token)
  );

  const makeUser = ({
    sub,
    preferred_username,
    email_verified,
    resource_access,
    email,
    name,
    ...others
  }) => ({
    id: sub,
    userName: preferred_username,
    emailVerified: email_verified,
    resourceAccess: resource_access,
    email,
    name,
    ...others
  });

const isTheRightKid = kid => publicKey => publicKey.kid === kid;

const getUserFromJWK = token => jwk =>
  compose(
    getUserFromPublicKey(token),
    jwkToPem,
    findPublicKeyFromKid(jwk),
    getKid,
    decode({ complete: true })
  )(token);

const verifyOffline = (accessToken, options = {}) => {
  const url = `${IDP_KEYCLOAK_URL}/realms/${IDP_KEYCLOAK_REALM}/protocol/openid-connect/certs`;

  return axios.get(url)
    .then(path(["data", "keys"]))
    .then(getUserFromJWK(accessToken))
};


app.use(helmet());
app.use(bodyParser.json());
app.use(cors());
app.use(morgan('combined'));

app.get('/ping', async (req, res) => {
  return res.status(200).json({message: "OK" });
});

app.get('/verify-token', async (req, res) => {
  if (!(req.header("Authorization") && req.header("Authorization").startsWith('Bearer '))) {
    return res.status(401).json({message: "Invalid Authorization"});
  }
  try
  {
    console.log(req.header("Authorization"))
    await verifyOffline(req.header("Authorization").slice(7))
    return res.status(200).json({});
  }
  catch (e){
    console.error(`Error: ${e.message}`);
    return res.status(401).json({message: "Unauthorized" });
  }
});

app.listen(3000, () => {
  console.log('listening on port 3000');
});