// mongodb.js

import { MongoClient } from 'mongodb'

const uri = "mongodb+srv://ojuso90:ojus9090@portfolio.hjrulr4.mongodb.net/?retryWrites=true&w=majority"
const options = {
  useUnifiedTopology: true,
  useNewUrlParser: true,
}

let client
let clientPromise

// if (!process.env.MONGODB_URI) {
//   throw new Error('Add Mongo URI to .env.local')
// }


  client = new MongoClient(uri, options)
  clientPromise = client.connect()

export default clientPromise
