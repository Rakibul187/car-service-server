const express = require('express')
const app = express()
const cors = require('cors')
const { MongoClient, ServerApiVersion } = require('mongodb');
const port = process.env.PORT || 5000
require('dotenv').config()

const name = {
    name: 'rakib',
    email: 'rakibul241221@gmail.com',
    address: 'Dka, Bangladesh'
}

app.use(cors())
app.use(express.json())



const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.farjvzi.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

async function run() {


    try {
    }
    finally {

    }
}
run().catch(e => console.error(e))

app.get('/', function (req, res) {
    res.send('Car service server is running')
})

app.listen(port, () => {
    console.log(`Car service server is running on ${port}`)
})