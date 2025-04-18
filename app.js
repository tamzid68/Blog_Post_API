const express = require("express");
const app = express();
const port =3000;

//Middleware to parse JSON
app.use(express.json());

const blogPostRouter = require("./router/postRoutes");
app.use(blogPostRouter);

app.listen(port, ()=>{
    console.log("Server is running on port "+port);
})