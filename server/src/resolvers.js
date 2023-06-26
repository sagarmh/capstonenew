import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { User } from "./models/users.js";

export const resolvers = {
  Query: {
    users: async () => await User.find({}),
  },
  Mutation: {
    delete: async (_, { id }) => {
      const result = await User.deleteOne({ _id: id });
      if (result.acknowledged && result.deletedCount === 1) {
        return id;
      }
      return null;
    },
    // edit: async (_, {id, name, emailId, password}) => {
    //     const result = await User.updateOne(
    //         {_id: id},
    //         {$set: {name, emailId, password}}
    //     );
    //     if (result.acknowledged && result.modifiedCount == 1) {
    //         return await User.findOne({_id: id});
    //     }
    //     return null;
    // },

    signup: async  (parent, args, context, info) => {
      const existingUser = await User.findOne({ emailId: args.emailId });
      if (existingUser) {
        throw new Error("User already exists .");
      }
      const hashedPassword = await bcrypt.hash(args.password, 10);
      const newUser = new User({
        name: args.name,
        emailId: args.emailId,
        password: hashedPassword,
      });
      await newUser.save();
      return newUser;
    },

    login: async (parent, args, context, info) => {
      const user = await User.findOne({ emailId: args.emailId });
      if (!user) {
        throw new Error("No such user found");
      }

      console.log(user);

      const userPassword = await bcrypt.compare(args.password, user.password);
      if (!userPassword) {
        throw new Error('Invalid password');
      }

      const token = jwt.sign({userId: user.id, emailId:user.emailId},
          'secretkey',
          {
            expiresIn: '1h'
          });

      return {user, token};
    },
  },
};
