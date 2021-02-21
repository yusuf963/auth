import express from 'express';
import bodyParser from 'body-parser'

const app = express()

app.use(express.static('public'))




const port = process.env.PORT || 5000
app.listen(port, () => {
  console.log('🚀 server up and running ')
})


