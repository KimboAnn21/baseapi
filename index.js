const bodyParser = require ("body-parser")
const express = require('express')
const app = express()
const headers = require('./headers')
const port = 5000

const monk= require('monk')
//const MongoClient = require('mongodb').MongoClient;
//const ObjectId = require("mongodb").ObjectId;
// const url = 'mongodb://KimboAnn21:Lumos36!@cluster0-shard-00-00-atbmg.mongodb.net:27017,cluster0-shard-00-01-atbmg.mongodb.net:27017,cluster0-shard-00-02-atbmg.mongodb.net:27017/KimCart?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true'

// const db = monk(url)

// db.then(() => {
//   console.log('connected');
// });

// const databaseItems = db.get('cart-items')

app.use(bodyParser.json());

// app.get('/', async function(req, res) {
//   const results = await items.find();
//   res.status(200).send(results);
// });

app.listen(3001, (err) => {
  if(err) {throw error}
  console.log('Server up and running on port 3001')
})

app.use(require('./headers'))
// app.use(bodyParser.json())
// let cart = [{ id: 1, name: 'computer', price: '300', image: ''}]
// let items = [
//     { id: 1, name: 'computer', price: '300', image: ''},
//     { id: 2, name: 'car', price: '3000', image: ''}
// ]

app.get('/', (req, res) => {
    res.send({ text: 'TEST' })
})

// app.get('/items', (req, res) => {
//     res.send(items)
// })

// app.get('/cart', (req, res) => {
//     res.send(cart)
// })

// app.post('/cart', (req, res) => {
    
// })
// app.listen(5000, (err) => {
//     if(err) { throw err }
//     console.log('Server up and running on port 5000')
// })