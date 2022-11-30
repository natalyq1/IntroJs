import express from "express";
//importar controlador
import {createPublicacion, readPublicacion, readPublicaciones} from "../controllers/HomeController.js"

let router=express.Router()

//localhost:3000/home
//enviar o redireccionar a /home
router.get("/",(req,res)=> {//enviar o redireccionar a /home
    res.send("Estas en la sección Homy")
}) 

router.get("g1",(req,res)=> {
    res.send("Bienvenido a la clase G1")
}) 

//desde aca en postman
router.post("/new", function (req,res) {
    //en postman la peticion se da en body-->raw-->JSON
   createPublicacion(req,res)
})

//router.get("/new", function (req,res) {
  //  res.send("Usted esta creando una nueva publicacion mediante GET")
//})

router.get("/lista",(req,res)=> {
    readPublicaciones(req,res)
}) 

router.get("/lista/:id",(req,res)=> {
    readPublicacion(req,res)
}) 

export default router;

/*******************************POSTMAN***********************
GET localhost:3000/home/lista
rta: []

GET localhost:3000/home/new
rta Usted esta creando una nueva publicacion mediante GET

POST localhost:3000/home/new
{
    "publicacion":{
    "titulo": "Bienvenido al curso G01",
    "autor": "Juan Perez",
    "mensaje": "Mensaje de prueba",
    "numero": 1233323
}
}
rta 
{
    "Nuestra publicacion:": {
        "titulo": "Bienvenido al curso G01",
        "autor": "Juan Perez",
        "mensaje": "Mensaje de prueba",
        "numero": 1233323
    },
    "Identificador no.: ": "itu02ta9bw9"
}

POST localhost:3000/home/new
{
    "publicacion":{
    "titulo": "2.Empezaremos con JavaScript",
    "autor": "Pedro Perez",
    "mensaje": "Segundo mensaje",
    "numero": 132323323
}
rta 
{
    "Nuestra publicacion:": {
        "titulo": "2.Empezaremos con JavaScript",
        "autor": "Pedro Perez",
        "mensaje": "Segundo mensaje",
        "numero": 132323323
    },
    "Identificador no. ": "0wsq86upen6f"
}

GET localhost:3000/home/lista
[
    {
        "Nuestra publicacion:": {
            "titulo": "2.Empezaremos con JavaScript",
            "autor": "Pedro Perez",
            "mensaje": "Segundo mensaje",
            "numero": 132323323
        },
        "Identificador no. ": "g9nq50503r"
    },
    {
        "Nuestra publicacion:": {
            "titulo": "3.Empezaremos con JavaScript",
            "autor": "Pedro Perez",
            "mensaje": "tercero mensaje",
            "numero": 155323323
        },
        "Identificador no. ": "dogdi0l99dn"
    }
]
*/