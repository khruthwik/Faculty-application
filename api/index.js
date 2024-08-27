const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const cors = require('cors');
require('dotenv').config();
const mongodatas = require('./models/user');
const jwt = require('jsonwebtoken');
const cookieparsar = require('cookie-parser');
const app=express();

const bcryptSalt=bcrypt.genSaltSync(10);
const jwtsecret = "sdfosdnfvosndolv";

app.use(cookieparsar());
app.use(express.json());

app.use(cors({
  credentials: true,
  origin: '*',
}));


mongoose.connect('mongodb+srv://khruthwik:Khr$1234@cluster0.ogty27a.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');


app.post('/register', async (req,res) => {
    const {name,email,password} = req.body;
    try {
      const userDoc = await mongodatas.create({
        name,
        email,
        password:bcrypt.hashSync(password, bcryptSalt),
      });
      res.json(userDoc);
    } catch (e) {
      res.status(422).json(e);
    }
  
  });



app.post('/login',async (req,res)=>{
    const{email,password} = req.body;
    try{
        const userDoc = await mongodatas.findOne({email});
        if(userDoc){
            const passok=bcrypt.compareSync(password,userDoc.password);
           if(passok){
             jwt.sign({email:userDoc.email,id:userDoc._id,name:userDoc.name},jwtsecret,{},(error,token)=>{
                 if(error) throw error;
                 res.cookie('token',token).json(userDoc);
             });
           }else{
            res.status(422).json('pass not okay');
           }
        }else{
           res.json('email not found');
        }

    }catch(e){
        res.status(422).json(e);
    }
   
})


app.get('/profile',(req,res)=>{
  const {token} = req.cookies;
  if(token){
    jwt.verify(token,jwtsecret,{},(err,user)=>{
        if(err) throw err;
        res.json(user);
    })
  }else{
    res.json('not there any');
  }
})

app.post('/Logout',(req,res)=>{
  res.cookie('token','').json(null);
})






app.listen(4000);