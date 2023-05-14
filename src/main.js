const express=require('express');
const app = express() ;
const mongoose= require("mongoose");
mongoose.set("strictQuery", true);
 
app.use(express.json())
mongoose.connect("mongodb://localhost:27017/", {
    maxPoolSize: 50, 
    wtimeoutMS: 2500,    
    useNewUrlParser: true,
    useUnifiedTopology: true
}).catch( (err) => {
    console.log( "encountered a error" ,err); 
} ).then(
    async client => {
        app.listen( 3000, () => {
            console.log("Running on port 3000");
        });

        console.log( typeof( client) );
        // let db = client.db("admin")
        // let collection = db.collection("test");
        // console.log( collection.find({}).toArray());
    }
);