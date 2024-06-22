import { where } from "sequelize";
import productModel from "../../models/product/index.js";

const productController = {
    get: async (req, res) => {
        try {
            const products = await productModel.findAll()
            res.json(products)
        } catch (error) {
            console.log(error)
        }

    },
    getbyId: async (req, res) => {
        try {
            const {id} = req.params;
            const product = await productModel.findOne({where: {id}});
            res.json({message: `Product with ${id}`, product})
        } catch (error) {
            console.log(error)
        }
    },
    post: async (req, res) => {
        try {
            const payload = req.body;

            const product = productModel.create({
                name: payload.name,
                rate: payload.rate,
                quantity: payload.quantity
            })

            res.json({message: "Product Created", product})
        } catch (error) {
            console.log(error)
        }
    },
    put: async (req, res) => {
        try {
            const {id} = req.params;
            const payload = req.body;

            const product = await productModel.findOne({where: {id}})

            if(!product) {
                return res.status(400).json({message: "No product with this id"})
            }

            payload.name ? product.name = payload.name : product.name;
            payload.rate ? product.rate = payload.rate : product.rate;
            payload.quantity ? product.quantity = payload.quantity : product.quantity

            await product.save()

            res.json({message: "Product Updated", product})

        } catch (error) {
            console.log(error)
        }
    },
    delete: async (req, res) => {
        try {
            const {id} = req.params;

            const product = await productModel.findOne({where: {id}});
            if(!product){
                return res.status(400).json({messagae: "Product with this id does not exist"})
            }
            await product.destroy()

            res.json({messagae: "Product Deleted"})
        } catch (error) {
            console.log(error)
        }
    }
}

export default productController;