const express = require('express');
const bodyParser = require('body-parser');
import mongoose from 'mongoose';
const route = require('./Routes/route.js');


const app = express();
app.use(bodyParser.json());


mongoose.connect("mongodb+srv://pareshnaik:W536yetBeRCk0yL8@cluster0.m9yz9.mongodb.net/vaccine-DB?retryWrites=true&w=majority", {
    // useNewUrlParser: true
})
    .then(() => console.log("MongoDb is connected"))
    .catch(err => console.log(err))


app.use('/', route);

app.listen(process.env.PORT || 3000, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});