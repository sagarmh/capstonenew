import mongoose from 'mongoose';

export const User = mongoose.model('User', {name: String, emailId: String, password: String}); 