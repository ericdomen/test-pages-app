
const express = require("express");
const router = express.Router();

const mensajes = [
    {
        _id  : "1",
        user : "gohan",
        mensaje : "Mensaje des el archivo rutas"
    },
    {
        _id  : "2",
        user : "goku",
        mensaje : "Mensaje de goku desde el archivo rutas"
    },
    {
        _id  : "3",
        user : "goku",
        mensaje : "nuevo mensaje"
    }
];


// PETICIONES GET
router.get( "/", (req, resp) => {
    resp.json( mensajes );
});

// PETICIONES POST
router.post( "/", (req, resp) => {

    const mensaje = {
        user : req.body.user,
        mensaje : req.body.mensaje
    }

    mensajes.push( mensaje );

    console.log("BD Mensajes:", mensajes);

    resp.json( {
        ok : true,
        mensaje
    } );
});


module.exports = router;