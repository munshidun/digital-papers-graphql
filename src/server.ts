import { GraphQLServer } from "graphql-yoga"
import { Schema } from './graphql/schema'
import { Resolvers } from './graphql/resolvers'

const server = new GraphQLServer({
    typeDefs: Schema,
    resolvers: Resolvers
})

server.start(() => console.log(`GraphQL service ready at http://localhost:4000`))