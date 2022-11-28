import express  from "express";
import UserRouter from "./routes/UserRouter.js";
import HomeRouter from "./routes/Home.js"
//importo a Express para empezar a usar

//empezar a usar express
const appe = express();
//la api requiere un puerto
const port = 3000;
//escuchar peticiones de los puertos con callback--funcion q se ejecuta despues del listen


//funcion normal
//function nombre(args,argb,argd){
   // Implementacion de la funcion
//}

//funcion flecha
//(args,argb,argd) =>{
    //implementacion de la funcion
//}

function callback(){
    console.log("El servidor se esta ejecutando");
}
//listen es un metodo implementado en express
appe.listen(port,callback)
//en terminal node AppExpress.js--responde El servidor se esta ejecutando.
//en navegador http://localhost:3000/ y me sale cannot get pero esta sirviendo

//peticion get con funcion anónima, es como la funcion callback, mas resumida, con 2 parametros
//request and response
appe.get("/",(req,res)=> {
    //respuesta de (funcion anonima)callback
    res.send("Hola, mundo!")
}) 

appe.get("/direction",(req,res)=> {//envia a /home cuando pongo /direction
    res.redirect("/home") //clase respuesta
}) 
//aca se usa lo que deje en UserRouter, que es todo lo referente a usuario
appe.use("/user", UserRouter)

appe.use("/home", HomeRouter)
