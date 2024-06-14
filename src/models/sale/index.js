import sequelize from "../../db/config.js";
import { DataTypes } from "sequelize";

const SaleModel = sequelize.define(
  'Sale',
    {
        totalAmount: {
            type: DataTypes.DOUBLE,
            allowNull: false
        }
    }
);

export default SaleModel;