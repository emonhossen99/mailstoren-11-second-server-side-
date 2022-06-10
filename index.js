const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;
const { MongoClient, ServerApiVersion } = require('mongodb');
const ObjectId = require('mongodb').ObjectId;

// middleware
app.use(cors());
app.use(express.json())


//database user and password
// user : dbuser1
//password : Tur429rsjf89gH1L


const uri = "mongodb+srv://dbuser1:Tur429rsjf89gH1L@cluster0.kr4e6pc.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
async function run() {
    try {
        await client.connect();
        const userCollection = client.db('foodDatabase').collection('food');
        //get data to database 
        app.get('/user', async (req, res) => {
            const query = {};
            const cursor = userCollection.find(query)
            const users = await cursor.toArray();
            res.send(users)

        })


        // serched by id name roots 
        app.get('/user/:id', async (req, res) => {
            const id = req.params.id;
            const query = { _id: ObjectId(id) };
            const result = await userCollection.findOne(query);
            res.send(result)
        })

        // client side receive data and send to database 
        app.post('/user', async (req, res) => {
            const NewUser = req.body;
            const result = await userCollection.insertOne(NewUser);
            console.log('receive', NewUser);
            res.send(result)
        })

        // updated user  
        app.put('/user/:id', async (req,res) => {
            const id = req.params.id;
            const updatedUser = req.body;
            const filter = {_id:ObjectId(id)};
            const options = {upsert: ture };
            const updateDoc = {
                $set : {
                    name : updatedUser.name,
                    email : updatedUser.email
                }
            };
            const result = await userCollection.updateOne(filter, updateDoc, options);
            res.send(result)
        })


        // delete user form database
        app.delete('/user/:id', async (req, res) => {
            const id = req.params.id;
            const query = { _id: ObjectId(id) }
            const result = await userCollection.deleteOne(query);
            res.send(result)
        })

        //heard codded user of mongodb
        // const user = {name : 'anik',email : "anikmahamud@gmail.com"}
        // const result = await userCollection.insertOne(user);
        // console.log(`This User Create ${result.insertedId}`);

    }
    finally {
        // await client.close();
    }

}
run().catch(console.dir);


app.get('/', (req, res) => {
    res.send('This is Runnig')
})
app.listen(port, () => {
    console.log(`runing ${port}`);
})