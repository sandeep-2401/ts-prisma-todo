import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
export async function insertUser(input) {
    const res = await prisma.user.create({
        data: {
            ...input
        }
    });
    console.log(res);
}
export async function updateUser(username, { firstname, lastname }) {
    const res = await prisma.user.update({
        where: {
            username
        },
        data: {
            firstname,
            lastname
        }
    });
    console.log(res);
}
export async function createTodo(input) {
    const res = await prisma.todo.create({
        data: {
            ...input
        }
    });
    console.log(res);
}
export async function getTodo(userId) {
    const res = await prisma.todo.findMany({
        where: {
            userId,
        }
    });
}
export async function getTodoAndUserDetails(userId) {
    const res = prisma.todo.findMany({
        where: {
            userId
        },
        select: {
            user: true,
            title: true,
            description: true
        }
    });
}
//# sourceMappingURL=index.js.map