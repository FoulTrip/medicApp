import { Router } from "express";
import { methods as routerControler } from "../controllers";

const router = Router();

router.get('/', routerControler.getRequests)
router.post('/', routerControler.addRequests)

export default router;