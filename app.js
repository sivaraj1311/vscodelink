const express= require('express');
const cors = require('cors');
const bodyparser = require('body-parser');
const morgan= require('morgan');

const app = express();

app.use(morgan('tiny'));
app.use(cors());
app.use (bodyparser.json());

app.get('/movie',(req,res)=>{
    res.send("movie from server");
});
module.exports=app