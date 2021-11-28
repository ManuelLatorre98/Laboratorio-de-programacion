const express= require("express");
const app = express();
const morgan = require("morgan");

//Settings
app.set("port", process.env.PORT || 3000);

//middlewares
app.use(morgan("dev"));
app.use(express.urlencoded({extended: false}));
app.use(express.json());


//routes
app.use(express.static("public"));
app.use("/api/recipes",require("./routes/recipes"));

//Starting the server
app.listen(app.get("port"),()=>{
    console.log(`server on port ${app.get("port")}`)
})
