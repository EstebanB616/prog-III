/**paquetes */
const express = require("express");
const config = require("config");

/**configuracio de app */
const app = express();
const port = config.get("port");


app.get("/",(req,res,next)=>{
    res.send("equipos");
});

const equipoRoute = require("./routes/equipo.route")
equipoRoute(app);

app.listen(port,()=>{
    console.log("server is running...")
});