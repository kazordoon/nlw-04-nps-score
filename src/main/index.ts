import express from 'express';
import '../config/dotenv';

const app = express();

app.get('/', (_req, res) => {
  res.send('Hello World');
});

const { HOST, PORT } = process.env;

app.listen(PORT, HOST, () => {
  console.log(`Listening on ${HOST}:${PORT}`);
});
