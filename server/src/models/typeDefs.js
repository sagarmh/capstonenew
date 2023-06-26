import gql from 'graphql-tag';

export const typeDefs = gql`
    type Query {
        users: [User]
    }
    type User {
        id: ID,
        name: String,
        emailId: String,
        password: String,
        token: String
    }

    type authUser{
        userId: ID,
        token:String,
        tokenExpiration:Int
    }
    type Mutation {
        create(name: String!, emailId: String!,password:String!): User
        delete(id: ID): ID
        edit(id: ID, name: String, emailId: String,password:String): User
        signup(id: ID, name: String!, emailId: String!,password:String!): User
        login(emailId: String!, password: String!):User
    }
`;