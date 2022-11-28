import express from "express";

let router=express.Router()

//localhost:3000/home
//enviar o redireccionar a /home
router.get("/",(req,res)=> {//enviar o redireccionar a /home
    res.send("Estas en la sección Homy")
}) 

router.get("g1",(req,res)=> {
    res.send("Bienvenido a la clase G1")
}) 

export default router;