import express from 'express';
import { MongoClient } from 'mongodb';

const app = express();
const PORT = 3000;

// MongoDB URI from environment variable
const mongoUri = process.env.MONGO_URI || 'mongodb://localhost:27017/mydatabase';

MongoClient.connect(mongoUri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(client => {
    console.log('Connected to MongoDB');
    const db = client.db('mydatabase');
    const collection = db.collection('mycollection');

    // Define a route for the root URL (/)
    app.get('/', async (req, res) => {
      const data = await collection.find().toArray();
      res.send(data.length ? data : 'Hello, World!');
    });

    // Start the server
    app.listen(PORT, '0.0.0.0', () => {
      console.log(`Server is running on http://0.0.0.0:${PORT}`);
    });
  })
  .catch(error => console.error(error));
