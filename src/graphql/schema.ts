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
        definitions: [Definition!]
        type: Type!
    }
    
    type Definition {
        id: Int!
        definition: String!
        subject: Int!
    }
    
    type Type {
        id: Int!
        name: String!
    }
`