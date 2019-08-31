export const Schema: string = `
    type Query {
        greeting(name: String = "World"): String
        subjects: [Subject!]
        defintions: [Definition!]
        types: [Type!]
    }
    
    type Subject {
        id: Int!
        title: String!
    }
    
    type Definition {
        id: Int!
        definition: String!
    }
    
    type Type {
        id: Int!
        name: String!
    }
`