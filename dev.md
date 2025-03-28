# Development

Models generation based on [openapi spec](https://github.com/regulaforensics/DocumentReader-api-openapi).

## Generation

To regenerate models from openapi definition, 
clone [latest open api definitions](https://github.com/regulaforensics/DocumentReader-api-openapi) 
and use next command from the project root.
```bash
./update-models.sh
```

## Generator configuration Features

1. The generator treats the discriminator value as a string, 
but in our case it's numbers. To solve this problem, changes 
have been made to the modelOneOf.mustache template.

## Problem solving

To solve new problems, use the generator 
settings ([typescript](https://github.com/OpenAPITools/openapi-generator/blob/master/docs/generators/typescript-axios.md), 
[common](https://github.com/OpenAPITools/openapi-generator/blob/master/docs/customization.md)) 
and [templates](https://github.com/OpenAPITools/openapi-generator/tree/master/modules/openapi-generator/src/main/resources/typescript-axios).

**Do not edit the generated files! They will be overwritten after generation!**