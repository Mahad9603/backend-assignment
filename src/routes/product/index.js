import { Router } from "express";
import productController from "../../controller/product/index.js";

const productRouter = Router();

productRouter.get('/products', productController.get);
productRouter.get('/product/:id', productController.getbyId)
productRouter.post('/product', productController.post);
productRouter.put('/product/:id', productController.put);
productRouter.delete('/product/:id', productController.delete);

export default productRouter;