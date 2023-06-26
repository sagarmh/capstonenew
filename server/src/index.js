import {ApolloServer} from '@apollo/server';
import {startStandaloneServer} from '@apollo/server/standalone';
import {typeDefs} from './models/typeDefs.js';
import {resolvers} from './resolvers.js';
import mongoose from 'mongoose';

//mongoose.set('strictQuery', true);
const db = await mongoose.connect('mongodb+srv://svmhatre1988:Awas*1304@cluster123.ldgrtqy.mongodb.net/capstone_netflix');
//db.on("error",(error)=>console.log(error));
//db.once("open",()=>console.log('📚 Connected to db', db?.connections[0]?._connectionString));

const server = new ApolloServer({typeDefs, resolvers});

const { url } = await startStandaloneServer(server, {
    listen: {
        port: 4000,
    },
});

console.info(`🚀 Server ready at ${url}`);