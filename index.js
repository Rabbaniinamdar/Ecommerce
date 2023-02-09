const express = require('express')
const path = require('path')
const axios = require('axios')
const app = express()
const port = 3000

const staticpath=path.join(__dirname,"")
console.log(staticpath)
app.use(express.static(staticpath))
app.get('/ecom', (req, res) => {
  res.sendFile("eflyer-master\\ecom.html", { root: path.join(__dirname) } )
  
})
app.get('/BuyNow', (req, res) => {
  res.sendFile("index.html", { root: path.join(__dirname) } )
  
})
app.get('/', (req, res) => {
  res.sendFile("index.html", { root: path.join(__dirname) } )
})
app.get('/api', async(req, res) => {
  // console.log(req._parsedUrl.query)
  let url = "https://dummyjson.com/products"
  let r = await axios(url)
  let a = r.data 
  res.json(a)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})