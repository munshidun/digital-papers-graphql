import { type } from 'os';
import { Subjects, Definitions, Types } from '../data'

export const Resolvers: any = {
    Query: {
        greeting: (_, { name }) => `Hello ${name}`,
        subjects: () => Subjects,
        defintions: () => Definitions,
        types: () => Types
    },
    Subject: {
        definitions: (subject) => Definitions.filter( (def: any ) => def.subject == subject.id ),
        type: ( subject ) => Types.find( ( type: any ) => type.id == subject.type ),
    },
}