import fs from 'fs'
import express from 'express'
import { nanoid } from 'nanoid'
const app = express()
const port = 3000

const urls = []

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/encode', async (req, res) => {
  const newId = nanoid(7);
  console.log('The newId:', newId)

  const urlPair = { [newId]: req.query.originalUrl }
  console.log('The urlPair:', urlPair)

  urls.push(urlPair)
  console.log('The urls array:', urls)

  res.send(`Your encoded url is: ${newId}`)
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})