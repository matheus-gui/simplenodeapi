const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const cors = require('cors'); 
const db = require('./models/db')
const User = require('./models/User')

app.use(cors())
app.use(bodyParser.json())

app.post('/add', (req, res)=>{
    User.create({
        firstName: req.body.firstName,
        lastName: req.body.lastName
    }).then(()=>{
       res.send(console.log('Usuário criado.')) 
    }).catch((err)=>{console.log(err)})
    
})

app.get('/user', (req, res)=>{  
    User.all    
    res.send("corpo")
})


app.listen(8081, ()=>{
    console.log('serv rodando')
})