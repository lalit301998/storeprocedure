const greeting:string='hello'
const numbers:number[]=[1,2,3];
import express from 'express'
const app = express()
app.get('/',(req,res)=>{
    res.send("hello")    
});
app.listen(5000,()=>{console.log('server is running')});