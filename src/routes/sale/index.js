import { Router } from "express";
import saleController from "../../controller/sale/index.js";

const saleRouter = Router();

saleRouter.get('/sales', saleController.get);
saleRouter.get('/sale/:id', saleController.getbyId);
saleRouter.post('/sale', saleController.post);
saleRouter.delete('/sale/:id', saleController.delete)

export default saleRouter;