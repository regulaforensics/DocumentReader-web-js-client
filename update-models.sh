#!/bin/sh

DOCS_DEFINITION_FOLDER="${PWD}/../DocumentReader-web-openapi" \
\
&& docker run --user "$(id -u):$(id -g)" --rm \
-v "${PWD}:/client" \
-v "$DOCS_DEFINITION_FOLDER:/definitions" \
openapitools/openapi-generator-cli:v7.13.0 generate \
-g typescript-axios \
-i /definitions/index.yml \
-o /client/src --global-property apiDocs=false,modelDocs=false --openapi-normalizer REF_AS_PARENT_IN_ALLOF=true --inline-schema-options RESOLVE_INLINE_ENUMS=true \
-t /client/generator-templates \
-c /client/ts-generator-config.json || exit 1

npm run format || exit 0
