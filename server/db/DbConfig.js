import mongoose from 'mongoose';

mongoose.set('strictQuery', false)

export function connectDb() {
  mongoose.connect(process.env.CONNECTION_STRING, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Database connected successfully'))
    .catch(err => console.error(err));
}
