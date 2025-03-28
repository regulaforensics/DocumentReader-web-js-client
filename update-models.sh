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
  sed -i '' '/import { TextResult } /d' ./src/models/text-result.ts
  sed -i '' '/import { AuthenticityResult } /d' ./src/models/authenticity-result.ts
  sed -i '' '/import { ChosenDocumentTypeResult } /d' ./src/models/chosen-document-type-result.ts
  sed -i '' '/import { DocBarCodeInfo } /d' ./src/models/doc-bar-code-info.ts
  sed -i '' '/import { DocumentImageResult } /d' ./src/models/document-image-result.ts
  sed -i '' '/import { DocumentPositionResult } /d' ./src/models/document-position-result.ts
  sed -i '' '/import { DocumentTypesCandidatesResult } /d' ./src/models/document-types-candidates-result.ts
  sed -i '' '/import { EncryptedRCLResult } /d' ./src/models/encrypted-rclresult.ts
  sed -i '' '/import { GraphicsResult } /d' ./src/models/graphics-result.ts
  sed -i '' '/import { ImageQualityResult } /d' ./src/models/image-quality-result.ts
  sed -i '' '/import { ImagesResult } /d' ./src/models/images-result.ts
  sed -i '' '/import { LexicalAnalysisResult } /d' ./src/models/lexical-analysis-result.ts
  sed -i '' '/import { LicenseResult } /d' ./src/models/license-result.ts
  sed -i '' '/import { StatusResult } /d' ./src/models/status-result.ts
  sed -i '' '/import { TextDataResult } /d' ./src/models/text-data-result.ts
  sed -i '' '/import { FiberResult } /d' ./src/models/fiber-result.ts
  sed -i '' '/import { IdentResult } /d' ./src/models/ident-result.ts
  sed -i '' '/import { OCRSecurityTextResult } /d' ./src/models/ocrsecurity-text-result.ts
  sed -i '' '/import { PhotoIdentResult } /d' ./src/models/photo-ident-result.ts
  sed -i '' '/import { SecurityFeatureResult } /d' ./src/models/security-feature-result.ts
  sed -i '' '/import { ByteArrayResult } /d' ./src/models/byte-array-result.ts
else
  sed -i '/import { TextResult } /d' ./src/models/text-result.ts
  sed -i '/import { AuthenticityResult } /d' ./src/models/authenticity-result.ts
  sed -i '/import { ChosenDocumentTypeResult } /d' ./src/models/chosen-document-type-result.ts
  sed -i '/import { DocBarCodeInfo } /d' ./src/models/doc-bar-code-info.ts
  sed -i '/import { DocumentImageResult } /d' ./src/models/document-image-result.ts
  sed -i '/import { DocumentPositionResult } /d' ./src/models/document-position-result.ts
  sed -i '/import { DocumentTypesCandidatesResult } /d' ./src/models/document-types-candidates-result.ts
  sed -i '/import { EncryptedRCLResult } /d' ./src/models/encrypted-rclresult.ts
  sed -i '/import { GraphicsResult } /d' ./src/models/graphics-result.ts
  sed -i '/import { ImageQualityResult } /d' ./src/models/image-quality-result.ts
  sed -i '/import { ImagesResult } /d' ./src/models/images-result.ts
  sed -i '/import { LexicalAnalysisResult } /d' ./src/models/lexical-analysis-result.ts
  sed -i '/import { LicenseResult } /d' ./src/models/license-result.ts
  sed -i '/import { StatusResult } /d' ./src/models/status-result.ts
  sed -i '/import { TextDataResult } /d' ./src/models/text-data-result.ts
  sed -i '/import { FiberResult } /d' ./src/models/fiber-result.ts
  sed -i '/import { IdentResult } /d' ./src/models/ident-result.ts
  sed -i '/import { OCRSecurityTextResult } /d' ./src/models/ocrsecurity-text-result.ts
  sed -i '/import { PhotoIdentResult } /d' ./src/models/photo-ident-result.ts
  sed -i '/import { SecurityFeatureResult } /d' ./src/models/security-feature-result.ts
  sed -i '/import { ByteArrayResult } /d' ./src/models/byte-array-result.ts
fi

npm run format || exit 0
