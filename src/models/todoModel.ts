import pool from "../db"

export type Todo = {
    id?: number
    title: string
    completed?: boolean
}

export const getTodos = async (): Promise<Todo[]> => {
    const result = await pool.query("SELECT * FROM todos;");
    return result.rows;
}

export const getTodoById = async (id: number): Promise<Todo|null>=> {
    const result = await pool.query("SELECT * FROM todos WHERE id = $1;",[id]);
    return result.rows[0] || null;
}

export const createTodo = async (title: string) : Promise<Todo> => {
    const  result = await pool.query("INSERT INTO todos(title) VALUES ($1) RETURNING *;",[title]);
    return result.rows[0];
}

export const updateTodo = async (id: number, completed: boolean) : Promise<Todo | null> => {
    const result = await pool.query("UPDATE todos SET completed = $1 WHERE id = $2 RETURNING *;",[completed,id])
    return result.rows[0] || null;
}

export const deleteTodo = async (id:number) :Promise<void> => {
    await pool.query("DELETE FROM todos WHERE id = $1;",[id]);
}