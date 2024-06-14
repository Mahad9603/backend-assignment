import "dotenv/config";
import express from 'express';
import { connectDB } from './db/config.js';
import syncDB from './db/init.js';

connectDB();
syncDB();

const app = express();
app.use(express.json());


app.listen(5000, ()=> {
    console.log("Server started at 5000")
})