import sequelize from "../../db/config.js";
import { DataTypes } from "sequelize";

const saleModel = sequelize.define(
  'Sale',
    {
        totalAmount: {
            type: DataTypes.DOUBLE,
            allowNull: false
        }
    }
);

export default saleModel;