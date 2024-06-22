import sequelize from "../../db/config.js";
import { DataTypes } from "sequelize";

const productModel = sequelize.define(
    'Product',
    {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
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

export default productModel