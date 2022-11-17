import fs from 'fs'
import express from 'express'
import { nanoid } from 'nanoid'
const app = express()
const port = 3000

const urls = []

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/encode', (req, res) => {
  const newId = nanoid(7);

  const urlPair = { [newId]: req.query.originalUrl }

  urls.push(urlPair)

  res.send(`Your encoded url is: ${newId}`)
})

app.get('/decode', (req, res) => {
  const thing = urls.map((obj) => {
    const [[key, value]] = Object.entries(obj)

    key === req.query.shortUrl && value
    
    res.send(`Your decoded short url is: ${value}`)
  })
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})