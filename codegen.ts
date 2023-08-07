import { CodegenConfig } from '@graphql-codegen/cli';
import * as process from 'process';

const config: CodegenConfig = {
  schema: {
    [process.env.GRAFBASE_API_URL]: {
      headers: {
        'x-api-key': process.env.GRAFBASE_API_KEY,
      },
    },
  },
  generates: {
    './graphql/schema.graphql': {
      plugins: ['schema-ast'],
    },
    './packages/web-app/graphql/schema.ts': {
      plugins: [
        'typescript',
        'typescript-operations',
        'typescript-react-apollo',
      ],
      config: {
        withHooks: true,
      },
    },
    './graphql/generated/': {
      preset: 'client',
      plugins: [],
    },
  },
  ignoreNoDocuments: true,
  documents: [
    'packages/web-app/data/**/*.graphql',
    'packages/graphql-api/src/**/*.graphql',
  ],
};

export default config;
