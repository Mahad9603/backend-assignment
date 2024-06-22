import sequelize from "../../db/config.js";
import { DataTypes } from "sequelize";

const userModel = sequelize.define(
    'User', 
    {
        firstName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true
            }
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }
)

export default userModel;