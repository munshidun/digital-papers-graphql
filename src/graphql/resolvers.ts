export const Resolvers: any = {
    Query: {
        greeting: ( _, { name } ) => `Hello ${name}`
    }
}