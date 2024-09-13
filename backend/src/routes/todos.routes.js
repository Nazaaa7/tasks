import { Router } from "express";
import { getAllTodosCtrl } from "../controllers/todos.controllers.js";
import { createTodoCtrl } from "../controllers/todos.controllers.js";
import validarJwt from "../middlewares/validar-jwt.js";
const todosRouter = Router();

todosRouter.get("/", validarJwt, getAllTodosCtrl);

todosRouter.post('/', validarJwt, createTodoCtrl); // Agrega esta línea para manejar el POST

export { todosRouter };


