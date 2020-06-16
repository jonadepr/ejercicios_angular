// Inicialización
const mongoose = require("mongoose");  // mongoose para mongodb
const express = require("express");    // Utilizamos express
var cors = require('cors');
const app = express();
const SuppliersRoutes = require("./server/routes/Suppliers");
// const bodyParse = require

app.use(cors());
app.use(express.json()); // para entender json
app.use("/api/supplier/", SuppliersRoutes);

mongoose
    .connect(
        "mongodb+srv://admin:admin@cluster0-rckpe.mongodb.net/market-store-jedi?retryWrites=true&w=majority"
    )
    .then((res) =>
        app.listen(4000, () => {
            console.log("mongodb is running");
        })
    )
    .catch((err) => console.log("se fue a la mierda"));