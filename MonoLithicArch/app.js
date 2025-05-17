const express=require('express');
const morgan=require('morgan');

const app=express();
app.use(morgan('dev')); // to track which route is being hit and how long it took to respond

app.get('/',(req,res)=>{
    res.send('Hello World');
})

app.get('/api',(req,res)=>{
    for(let i=0;i<10000000000;i++){
        // Simulate some processing
    }
    res.send('API Endpoint');
})

app.get('/stress',(req,res)=>{
    for(let i=0;i<100000000000;i++){
        // Simulate some processing
    }
    res.send('Another API Endpoint');
})

app.listen(3000,()=>{
    console.log('Server is running on port 3000');
})