
import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: "http://my-graphql-api.com/graphql",
  documents: "src/**/*.ts",
  generates: {
    "src/generated/graphql.ts": {
      plugins: ['typescript-apollo-angular', 'typescript', 'typescript-operations',]
    },
    "./graphql.schema.json": {
      plugins: ["introspection"],
      config: {
        addExplicitOverride: true,
        noExport: false,
        skipTypename: true,
        useTypeImports: false,
        serviceProvidedInRoot: true,
        withHooks: false,
        dedupeFragments: true,
      },
    }
    
  }
};

export default config;
