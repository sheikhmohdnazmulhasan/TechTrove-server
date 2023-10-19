const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const app = express();
const port = process.env.PORT || 5000;

// middleware
app.use(cors())
app.use(express.json())

// nazmulofficial
// uCWZHdBoMICjvzwh


const uri = "mongodb+srv://nazmulofficial:uCWZHdBoMICjvzwh@cluster0.ctqp5xj.mongodb.net/?retryWrites=true&w=majority";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

async function run() {
    try {

        await client.connect();

        const companyCollection = client.db("AtenDB").collection("company");

        app.get('/brands', async (req, res) => {
            const cursor = companyCollection.find();
            const result = await cursor.toArray();
            res.send(result);
        });


        await client.db("admin").command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } finally {
        // Ensures that the client will close when you finish/error
        // await client.close();
    }
}
run().catch(console.dir);


app.get('/', (req, res) => {
    res.send('my assaingment server is running')
});

app.listen(port, () => {
    console.log('Assaingment server in running on PORT:', port);
})