import request from "supertest";
import app from "../app"
import {describe} from "node:test";

describe("Todo API",() => {
    let todo_id: number = 0;
    it('should get all todos',async () => {
        const res = await request(app).get("/todos");
        expect(res.status).toBe(200);
        expect(Array.isArray(res.body)).toBe(true);
    });

    it('should create a new todo', async () => {
        const res = await request(app).post("/todos").send({title: "New Task"});
        todo_id = res.body.id;
        expect(res.status).toBe(201);
        expect(res.body.title).toBe("New Task");
    });

    it('should get one not completed todo',async () => {
        const res = await request(app).get(`/todos/${todo_id}`);
        expect(res.status).toBe(200);
        expect(res.body.title).toBe("New Task");
        expect(res.body.completed).toBe(false);
    });

    it('should update a todo', async () => {
        const res = await request(app).put(`/todos/${todo_id}`).send({completed: true})
        expect(res.status).toBe(200);
        expect(res.body.completed).toBe(true);
    });

    it('should completed todo', async () => {
        const res = await request(app).get(`/todos/${todo_id}`);
        expect(res.status).toBe(200);
        expect(res.body.title).toBe("New Task");
        expect(res.body.completed).toBe(true);
    });

    it('should delete a todo', async () => {
        const res = await request(app).delete(`/todos/${todo_id}`);
        expect(res.status).toBe(204);
    });

    it('should not found', async () => {
        const res = await request(app).get(`/todos/${todo_id}`);
        expect(res.status).toBe(404);
    });
})