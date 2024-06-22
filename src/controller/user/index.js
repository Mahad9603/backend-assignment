import userModel from "../../models/user/index.js";
import { compare, hash } from "bcrypt";
import jwt from 'jsonwebtoken';


const userController = {
    signUp: async (req, res) => {
        try {
            const payload = req.body;

            const user = await userModel.findOne({where: {email: payload.email}})

            if(user){
                return res.status(400).json({message: "User Already exists"})
            }

            const hpassword = await hash(payload.password, 10);
            const newUser = await userModel.create({
                firstName: payload.firstName,
                email: payload.email,
                password: hpassword
            })
            
            res.json({message: "New User Created", newUser, payload})
        } catch (error) {
            console.log(error)
        }
    },
    signIn: async (req, res) => {
        try {
            const payload = req.body;

            const user = await userModel.findOne({where: {email: payload.email}})

            if(!user){
                return res.status(400).json({message: "Invalid Credentials"})
            }

            const comparePassowrds = await compare(payload.password, user.password)
            if(!comparePassowrds){
                return res.status(400).json({message: "Invalid Credentials"})
            }

            const data = {
                id: user.id,
                firstName: user.firstName,
                email: user.email
            }
            
            const token = jwt.sign(data, process.env.JWT_KEY, {
                expiresIn: "1h"
            })

            res.json({user, data, token})
        } catch (error) {
            console.log(error)
        }
    }
}

export default userController;