import {PrismaClient} from '@prisma/client'

const prisma = new PrismaClient()

interface userInput {
    username : string, 
    password : string, 
    firstname : string, 
    lastname : string
}
export async function insertUser(input : userInput){
    const res = await prisma.user.create({
        data : {
            ...input
        }
    })
    console.log(res)
    return res
}

interface UpdateParams {
    firstname: string;
    lastname: string;
}

export async function updateUser(username : string, {
    firstname,
    lastname
} :UpdateParams){
    const res = await prisma.user.update({
        where:{
            username
        },
        data : {
            firstname,
            lastname
        }
    })
    console.log(res)
    return res
}

interface createTodoInput {
    userId : number, 
    title : string, 
    description : string
}
export async function createTodo(input : createTodoInput){
    const res = await prisma.todo.create({
        data:{
            ...input
        }
    })
    console.log(res)
    return res
}

export async function getTodo(userId : number) {
    const res = await prisma.todo.findMany({
        where : {
            userId,
        }
    })
    console.log(res)
    return res
}

export async function getTodoAndUserDetails(userId:number) {
    const res = await prisma.todo.findMany({
        where : {
            userId
        },
        select : {
            user : true,
            title : true,
            description : true
        }
    })
    return res
}   