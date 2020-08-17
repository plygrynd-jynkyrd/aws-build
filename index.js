const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send('Hello Mirror')
})

app.listen("4000", () => { console.log('up n runnin')})

