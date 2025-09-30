import express from 'express'
import { insertUser,createTodo,getTodo,getTodoAndUserDetails } from "./index.js";

const router = express.Router()

router.post('/user',async (req,res)=>{
    try{
        const response = await insertUser(req.body)
        res.json(response)
    }
    catch(err){
        console.log(err)
        res.json({
            msg : ' error inserting user'
        })
    }
})

router.post('/todo',async (req,res)=>{
    try{
        const response = await createTodo(req.body)
        res.json(response)
    }
    catch(err){
        console.log(err)
        res.json({
            msg : ' error inserting todo'
        })
    }
})

router.get('todo',async(req,res)=>{
    try{
        const response = await getTodoAndUserDetails(req.body)
        res.json(response)
    }
    catch(err){
        console.log(err)
        res.json({
            msg : ' error finding todo'
        })
    }
})

router.get('todo',async(req,res)=>{
    try{
        const response = await getTodo(req.body)
        res.json(response)
    }
    catch(err){
        console.log(err)
        res.json({
            msg : ' error finding todo'
        })
    }
})

export default router