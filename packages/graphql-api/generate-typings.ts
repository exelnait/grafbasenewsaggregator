const GraphQLDefinitionsFactory =
  require('@nestjs/graphql').GraphQLDefinitionsFactory;
const join = require('path').join;

const definitionsFactory = new GraphQLDefinitionsFactory();
definitionsFactory.generate({
  typePaths: [join(process.cwd(), './src/**/*.graphql')],
  path: join(process.cwd(), 'graphql.ts'),
  outputAs: 'class',
});
