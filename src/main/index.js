require('dotenv').config();
const cors = require('cors');
const express = require("express");


const app = express();
const PORT = process.env.PORT || 8080;

const InitServer = async () => {
    try {

        app.use(express.json());


        app.listen(PORT, () => {
            console.log(`Servidor en ejecución en el puerto ${PORT}`);
        });
    } catch (err) {
        console.error('No se pudo iniciar el servidor debido a un error en la base de datos:', err);
    }
}
InitServer()