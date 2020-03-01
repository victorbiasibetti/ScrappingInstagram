var ig = require('instagram-scraping');


const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://dbUser:dbPassword@cluster0-b3rvc.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
  const collection = client.db("test").collection("post");
  
  ig.scrapeUserPage('intertelecom.net.br').then(result => {
    result.medias.forEach(post => {
      collection.insertOne(post)
    });
  });   
});
