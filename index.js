import fs from 'fs'
import express from 'express'
import { nanoid } from 'nanoid'
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/encode', async (req, res) => {
  const newId = nanoid(7);
  console.log('The newId:', newId)
  
  const urlPair = {[newId]: req.query.originalUrl}
  console.log('The urlPair:', urlPair)

  await fs.readFile('urls.json', 'utf8', (err, data) => {
    err && console.log('The err:', err)
    // data = JSON.parse(urlPair)
    const thing = data.urls.push(urlPair)
    
    console.log('The data:', data)
    
  } )

  res.send(`The url you want to encode is ${req.query.originalUrl}`)

  // req.query.originalUrl
  //   ? {
  //     res.send(`The url you want to encode is ${req.query.originalUrl}`)
  //   }
  //   :
  //   res.send('Welcome to the encode endpoint! Please enter the url you wish to encode like so: encode?originalUrl=[YOUR_URL]')
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})