import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose';
import Cluster from "./Schemaa.js"
import cors from 'cors';
import bodyParser from "body-parser";

//app configure
const app=express()
dotenv.config();
app.use(bodyParser.json({extended:true}))
app.use(bodyParser.urlencoded({extended:true}))
const port=process.env.PORT||8001
const connection =' mongodb+srv://krisha:krishapatel@cluster0.w382rt0.mongodb.net/?retryWrites=true&w=majority'


//middlewares
app.use(express.json())
//donot forget to add brackets after cors otherwise it will give error
app.use(cors())
mongoose.connect(connection,{
    useNewUrlParser: true,
   
    useUnifiedTopology: true,
}).then(()=>{
    console.log("Connected")
}).catch(()=>{
    console.log("Not connected")
})

//endpoints
app.get('/',(req,res)=>{
    res.send("Hello worldddd")
})

app.post('/post',(req,res)=>{

    const krishaaa=req.body;
    Cluster.create(krishaaa)
    .then((data)=>{
        res.status(200).send(data)
    })
    .catch((err)=>{
        res.status(500).send(err)
    })
})


app.get('/get',(req,res)=>{
    Cluster.find((err,data)=>{
      if(err){
        res.status(500).send(err)
      }
      else{
        res.status(200).send(data)
      }
    })
})

//db configure

//listening

app.listen(port,()=>{
    console.log("Listening at 8001")
})