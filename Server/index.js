const express = require("express");
const app = express();
const mongoose = require("mongoose");

mongoose.set('strictQuery', true)
// set up middle ware
app.use(express.json());
const cors = require("cors");

app.use(cors());


//establish communication to MongoDB atals (database)

mongoose.connect("mongodb+srv://mcknightdarold33:Student123!@cluster0.bkivg5g.mongodb.net/ExoticDealership?retryWrites=true&w=majority").then( () => console.log("Connected TO Database")).then( ()=>{
    app.listen(3001)
}).catch((err) => console.log(err));



