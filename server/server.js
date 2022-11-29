const express = require('express');
const app =express();
const apiRouter = require('./router/apiRouter');
const cors =require('cors');
const bodyparser = require('body-parser');
const mongoose = require('mongoose');

const hostname = '127.0.0.1';
const port =5000;

app.use(cors());
//adding body parser
app.use(bodyparser.json());

app.get('/',(request,response)=>{
   response.send(`<h1>Welcome to express server.....</h1>`)
});

app.use('/api',apiRouter);

// Connect to Mongo DB Database
mongoose.connect('mongodb://127.0.0.1:27017/user-portal' , {
    useNewUrlParser: true,
    useUnifiedTopology: false,
    useCreateIndex : true }).
then((connection) => {
    console.log(`Connected to Mongo DB Database Successfully............`);
}).catch((err) => {
    console.error(err);
    process.exit(1); // to stop the node js process
});


app.listen(port,hostname,()=>{
   console.log(`started server at http://${hostname}:${port}`);
});