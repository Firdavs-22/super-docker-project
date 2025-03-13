import {Router, Request, Response} from "express";
import {getTodos,getTodoById,createTodo,deleteTodo,updateTodo} from "../models/todoModel";

const router = Router();

router.get("/", async (req:Request, res:Response) => {
    const todos = await getTodos();
    res.json(todos).end();
});

router.get('/:id', async (req: Request, res:Response) => {
    const todo = await getTodoById(Number(req.params.id));
    if (!todo) {
        res.status(404).json({ message: 'Todo not found' });
        return;
    }
    res.json(todo).end();
});

router.post('/', async (req:Request, res:Response) => {
    const { title } = req.body;
    if (!title) {
        res.status(400).json({ message: 'Title is required' });
        return
    }

    const newTodo = await createTodo(title);
    res.status(201).json(newTodo);
});

router.put('/:id', async (req:Request, res:Response) => {
    const { completed } = req.body;
    const updatedTodo = await updateTodo(Number(req.params.id), completed);

    if (!updatedTodo) {
        res.status(404).json({ message: 'Todo not found' });
        return;
    }
    res.json(updatedTodo);
});

router.delete('/:id', async (req:Request, res:Response) => {
    await deleteTodo(Number(req.params.id));
    res.status(204).send();
});

export default router;