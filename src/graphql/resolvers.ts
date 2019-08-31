import { type } from 'os';
import { Subjects, Definitions, Types } from '../data'

export const Resolvers: any = {
    Query: {
        greeting: (_, { name }) => `Hello ${name}`,
    
        subjects: (_, { typeId, typeName }) => {
            
            if (typeId) {
                return Subjects.filter((subject: any) => subject.type == typeId)
            }
            
            if (typeName) {
                const type: any = Types.find((type: any) => type.name == typeName)
                
                if (!type) return null
                
                return Subjects.filter((subject: any) => subject.type == type.id)
            }
            
            return Subjects
        },
        defintions: () => Definitions,
        types: () => Types
    },
    Subject: {
        definitions: (subject) => Definitions.filter( (def: any ) => def.subject == subject.id ),
        type: ( subject ) => Types.find( ( type: any ) => type.id == subject.type ),
    },
}