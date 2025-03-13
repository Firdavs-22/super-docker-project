import express,{Request, Response} from "express";
import cors from "cors";
import todoRoutes from "./routes/todoRoutes";

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req: Request, res:Response):void => {
    res.send("Hello World!").end();
    return;
})

app.use("/todos",todoRoutes)

export default app;