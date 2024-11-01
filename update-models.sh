#!/bin/sh

DOCS_DEFINITION_FOLDER="${PWD}/../DocumentReader-web-openapi" \
\
&& docker run --user "$(id -u):$(id -g)" --rm \
-v "${PWD}:/client" \
-v "$DOCS_DEFINITION_FOLDER:/definitions" \
openapitools/openapi-generator-cli:v5.0.0 generate -g typescript-axios \
-i /definitions/index.yml \
-o /client/src \
-c /client/ts-generator-config.json \
-t /client/generator-templates/ || exit 1

if [ "$(uname)" = "Darwin" ]; then
  sed -i '' '/import type { TextResult } /d' ./src/models/text-result.ts
  sed -i '' '/import type { AuthenticityResult } /d' ./src/models/authenticity-result.ts
  sed -i '' '/import type { ChosenDocumentTypeResult } /d' ./src/models/chosen-document-type-result.ts
  sed -i '' '/import type { DocBarCodeInfo } /d' ./src/models/doc-bar-code-info.ts
  sed -i '' '/import type { DocumentBinaryInfoResult } /d' ./src/models/document-binary-info-result.ts
  sed -i '' '/import type { DocumentImageResult } /d' ./src/models/document-image-result.ts
  sed -i '' '/import type { DocumentPositionResult } /d' ./src/models/document-position-result.ts
  sed -i '' '/import type { DocumentTypesCandidatesResult } /d' ./src/models/document-types-candidates-result.ts
  sed -i '' '/import type { EncryptedRCLResult } /d' ./src/models/encrypted-rclresult.ts
  sed -i '' '/import type { GraphicsResult } /d' ./src/models/graphics-result.ts
  sed -i '' '/import type { ImageQualityResult } /d' ./src/models/image-quality-result.ts
  sed -i '' '/import type { ImagesResult } /d' ./src/models/images-result.ts
  sed -i '' '/import type { LexicalAnalysisResult } /d' ./src/models/lexical-analysis-result.ts
  sed -i '' '/import type { LicenseResult } /d' ./src/models/license-result.ts
  sed -i '' '/import type { StatusResult } /d' ./src/models/status-result.ts
  sed -i '' '/import type { TextDataResult } /d' ./src/models/text-data-result.ts
else
  sed -i '/import type { TextResult } /d' ./src/models/text-result.ts
  sed -i '/import type { AuthenticityResult } /d' ./src/models/authenticity-result.ts
  sed -i '/import type { ChosenDocumentTypeResult } /d' ./src/models/chosen-document-type-result.ts
  sed -i '/import type { DocBarCodeInfo } /d' ./src/models/doc-bar-code-info.ts
  sed -i '/import type { DocumentBinaryInfoResult } /d' ./src/models/document-binary-info-result.ts
  sed -i '/import type { DocumentImageResult } /d' ./src/models/document-image-result.ts
  sed -i '/import type { DocumentPositionResult } /d' ./src/models/document-position-result.ts
  sed -i '/import type { DocumentTypesCandidatesResult } /d' ./src/models/document-types-candidates-result.ts
  sed -i '/import type { EncryptedRCLResult } /d' ./src/models/encrypted-rclresult.ts
  sed -i '/import type { GraphicsResult } /d' ./src/models/graphics-result.ts
  sed -i '/import type { ImageQualityResult } /d' ./src/models/image-quality-result.ts
  sed -i '/import type { ImagesResult } /d' ./src/models/images-result.ts
  sed -i '/import type { LexicalAnalysisResult } /d' ./src/models/lexical-analysis-result.ts
  sed -i '/import type { LicenseResult } /d' ./src/models/license-result.ts
  sed -i '/import type { StatusResult } /d' ./src/models/status-result.ts
  sed -i '/import type { TextDataResult } /d' ./src/models/text-data-result.ts
fi

npm run format || exit 0
