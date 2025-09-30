import express from 'express';
import router from './controller.js';

const app = express()
app.use(express.json())

app.use('/todo', router)

app.listen(3000,()=>{
    console.log("Server running on port 3000")
})