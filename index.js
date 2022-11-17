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
  if (req.query.url){
    const newId = nanoid(7)
    const urlPair = { [newId]: req.query.url }
    urls.push(urlPair)

    res.write(`Your encoded url is: ${newId}`)
    res.end()
  }
  else {
    res.write('Please enter a url to encode like so: /encode?url=YOUR_URL')
    res.end()
  }
})

app.get('/decode', (req, res) => {
  urls.map((obj) => {
    const [[key, value]] = Object.entries(obj)
    key === req.query.shortUrl && value
    res.write(`Your decoded short url is: ${value}`)
    res.end()
  })
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})