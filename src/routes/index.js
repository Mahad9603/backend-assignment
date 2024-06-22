import productRouter from "./product/index.js";
import saleRouter from "./sale/index.js";
import userRouter from "./user/index.js";

const allRouter = [productRouter, saleRouter, userRouter];

export default allRouter;