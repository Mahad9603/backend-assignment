import productModel from "../../models/product/index.js";
import productSaleModel from "../../models/productSale/index.js";
import saleModel from "../../models/sale/index.js";

const saleController = {
    get: async (req, res) => {
        try {
            const sales = await saleModel.findAll();
            
            res.json({message: "All Sales", sales})
        } catch (error) {
            console.log(error)
        }
    }, 
    getbyId: async (req, res) => {
        try {
            const {id} = req.params;
            if(!id){
                return res.status(400).json({message: "There is no sale with this id"})
            }

            const sale = await saleModel.findOne({where: {id}})

            res.json({message: "Your sale with id", sale})
        } catch (error) {
            console.log(error)
        }
    },
    post: async (req, res) => {
        try {
            const payload = req.body;
            let totalAmount = 0;
            payload.productSale.forEach(element => {
                totalAmount = totalAmount + element.quantity * element.rate ;
            });

            const sale = await saleModel.create({
                totalAmount: totalAmount
            })

            const productSale = []
            for(let i = 0; i < payload.productSale.length; i++){
                const element = payload.productSale[i];
                productSale.push({
                    ...element,
                    SaleId: sale.id
                })

            const product = await productModel.findByPk(element.ProductId)
            if(product.quantity < element.quantity) {
             return res.status(400).json({message: "Not sufficinet amount of product"})
            };
            }
           await productSaleModel.bulkCreate(productSale)

           res.json({
            message: "Post Sale",
            sale,
            productSale,
           })

        } catch (error) {
            console.log(error)
        }
    }, 
    delete: async (req, res) => {
        try {
            const {id} = req.params;
            const sale = await saleModel.findOne({where: {id}})
            if(!sale){
                return res.status(400).json({message: "There is no sale with this id"})
            }

            await productSaleModel.destroy({where: {SaleId: id}}).then(() => {
                return saleModel.destroy({where: {id}})
            })

            res.json({messagae: "Sale and ProductSale has been deleted"})
            
        } catch (error) {
            console.log(error)
        }
    }
}

export default saleController;