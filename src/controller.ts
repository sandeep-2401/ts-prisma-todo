import express from 'express'
import { insertUser,createTodo,getTodo,getTodoAndUserDetails } from "./index.js";

const router = express.Router()

router.post('/user',async (req,res)=>{
    try{
        const response = await insertUser(req.body)
        return res.json(response)
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

router.get('/userandtodo',async(req,res)=>{
    try{
        const userId = Number(req.query.userId)
        const response = await getTodoAndUserDetails(userId)
        res.json(response)
    }
    catch(err){
        console.log(err)
        res.json({
            msg : ' error finding todo'
        })
    }
})

router.get('/todo',async(req,res)=>{
    try{
        const userId = Number(req.query.userId)
        const response = await getTodo(userId)
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