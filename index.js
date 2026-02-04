import dotenv from "dotenv"
dotenv.config()
import express from "express";
const app=express();
import {connectDB} from "./config/Database.js";
import route from "./routes/contacts.routes.js";

const PORT = process.env.PORT || 4000;
// Database connection
await connectDB();

//middleware
app.set('view engine','ejs');
app.use(express.urlencoded({extended:false}));
app.use(express.static('public'));

app.use('/', route);


app.listen(PORT,()=>{
    console.log(`Server is running on port http://localhost:${PORT}`);
});
