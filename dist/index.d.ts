interface userInput {
    username: string;
    password: string;
    firstname: string;
    lastname: string;
}
export declare function insertUser(input: userInput): Promise<void>;
interface UpdateParams {
    firstname: string;
    lastname: string;
}
export declare function updateUser(username: string, { firstname, lastname }: UpdateParams): Promise<void>;
interface createTodoInput {
    userId: number;
    title: string;
    description: string;
}
export declare function createTodo(input: createTodoInput): Promise<void>;
export declare function getTodo(userId: number): Promise<void>;
export declare function getTodoAndUserDetails(userId: number): Promise<void>;
export {};
//# sourceMappingURL=index.d.ts.map