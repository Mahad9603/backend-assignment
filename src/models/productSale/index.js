import sequelize from "../../db/config.js";
import { DataTypes } from "sequelize";
import productModel from "../product/index.js";
import saleModel from "../sale/index.js";

const productSaleModel = sequelize.define(
    'ProductSale',
    {
        rate: {
            type: DataTypes.DOUBLE,
            allowNull: false
        },
        quantity: {
            type: DataTypes.DOUBLE,
            allowNull: false
        }
    }
)

export default productSaleModel;

saleModel.hasMany(productSaleModel);
productSaleModel.belongsTo(saleModel);

productModel.hasMany(productSaleModel);
productSaleModel.belongsTo(productModel);
