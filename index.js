import express from 'express';
import { nanoid } from 'nanoid';

const app = express();
const port = 3000;

const urls = {};

app.get('/', (_, res) => {
  res.write('Welcome to my url shortener!\n');
  res.write('To encode: /encode?url=YOUR_URL\n');
  res.write('To decode: /decode?code=YOUR_CODE\n');
  res.end();
});

app.get('/encode', (req, res) => {
  if (req.query.url) {
    const newId = nanoid(7);
    urls[newId] = req.query.url;

    res.write(`Your encoded url is: ${newId}`);
  } else {
    res.write('Please enter a url to encode like so: /encode?url=YOUR_URL');
  }
  res.end();
});

app.get('/decode', (req, res) => {
  const url = urls[req.query.code];
  if (url) {
    res.write(`Your decoded short url is: ${url}`);
  } else if (!req.query.code) {
    res.write('Please enter a url to decode like so: /decode?code=YOUR_CODE');
  } else {
    res.write(`No url could be found for code: ${req.query.code}`);
  }
  res.end();
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
