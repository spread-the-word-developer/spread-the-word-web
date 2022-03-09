
const { MongoClient, ServerApiVersion } = require('mongodb');
//TODO add mongoDB database uri 
const uri = "";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(err => {
    const collection = client.db("test").collection("devices");
    console.log("Connection success");
    client.close();
});
