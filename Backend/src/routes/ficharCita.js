import { Router } from "express";
import { citas as routerControler } from '../controllers/ficharCita'

const ficharCitas = Router();

ficharCitas.get('/', routerControler.getCita);
ficharCitas.post('/', routerControler.addCita);

export default ficharCitas