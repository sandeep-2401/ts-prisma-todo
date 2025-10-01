interface userInput {
    username: string;
    password: string;
    firstname: string;
    lastname: string;
}
export declare function insertUser(input: userInput): Promise<{
    username: string;
    password: string;
    firstname: string;
    lastname: string;
    id: number;
}>;
interface UpdateParams {
    firstname: string;
    lastname: string;
}
export declare function updateUser(username: string, { firstname, lastname }: UpdateParams): Promise<{
    username: string;
    password: string;
    firstname: string;
    lastname: string;
    id: number;
}>;
interface createTodoInput {
    userId: number;
    title: string;
    description: string;
}
export declare function createTodo(input: createTodoInput): Promise<{
    id: number;
    title: string;
    description: string;
    done: boolean;
    userId: number;
}>;
export declare function getTodo(userId: number): Promise<{
    id: number;
    title: string;
    description: string;
    done: boolean;
    userId: number;
}[]>;
export declare function getTodoAndUserDetails(userId: number): Promise<{
    user: {
        username: string;
        password: string;
        firstname: string;
        lastname: string;
        id: number;
    };
    title: string;
    description: string;
}[]>;
export {};
//# sourceMappingURL=index.d.ts.map