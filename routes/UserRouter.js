import express from "express";

const router = express.Router()
//localhost:3000/user

//Lenguaje JSON--API
const user = {//objeto JSON
    "nombre":"Pedro",
    correo:"pedro@com",
    edad: 15,
    notas: [
        5,
         4,
         4.8
    ],
    mascota:{
        nombre:"Lucas",
        raza:"Pitbull",
        edad:7
    }
}

//localhost:3000/user
//peticiones http



router.get("/", (req, res) => {
    //Implementar el codigo
    res.json(user)
})

//localhost:3000/user/pet
    router.get("/pet",(req,res)=> {//respuesta en formato Json
        res.json(user.mascota) //clase respuesta, usa la api q se creo previamnete
    }) 
    
    router.get("/name",(req,res)=> {//user.mascota.edad= 7
        res.json(user.nombre) //.nombre de seccion, accede a la info q contenga ese nombre
    }) 
    
//Agrupar
router.get("/agrupar", (req,res) => {
    res.send("Usted esta en la sección de AGRUPAR")
})
router.get("/agrupar/:args", (req,res) => {//recibir argumentos
    //http://localhost:3000/user/agrupar/juan,maicol rta:juan,maicol
    let nombres = req.params.args
    nombres = nombres.split(" ")//se usa un caracter: , o . o " "
    //rta: [
       // "juan",
       // "maicol"
     // ]
    res.send(nombres)
})


    //variables se ponen al final para que no interfieran con las otras peticiones
router.get("/:nombre", (req, res) => {//:nombre -->se usa para traer variables
    let nombre = req.params.nombre //solicita el parametro nombre
    res.send("Usted esta buscando al usuario: " + nombre)
})//http://localhost:3000/user/nat   **rta: Usted esta buscando al usuario: nat
    

//variable tras variable
router.get("/:nombre/:id", (req, res) => {//:nombre -->se usa para traer variables
    let nombre = req.params.nombre //solicita el parametro nombre
    let idUser = req.params.id
    //res.send("Usted esta buscando al usuario: " + nombre +" con documento: " +idUser)
    res.json({//manda como rta json
        "nombre de usuario" :nombre,
        "id usuario": idUser
    })
})//http://localhost:3000/user/nat/8585555   **rta: Usted esta buscando al usuario: nat con doc. 858888
   


//http://localhost:3000/user/loq%20sea/hola --> RTa: Usted esta buscando al usuario: loq sea
//http://localhost:3000/user/loqsea sin el parametro de arriba, me saldra q no lo puede obtener
router.get("/:loqsea/hola", (req, res) => {//:nombre -->se usa para traer variables
    let loqsea = req.params.loqsea //solicita el parametro nombre
    res.send("Usted esta buscando al usuario: " + loqsea)
})
   
    export default router;