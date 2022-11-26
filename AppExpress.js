import express  from "express";
//importo a Express para empezar a usar

//empezar a usar express
const appe = express();
//la api requiere un puerto
const port = 3000;
//escuchar peticiones de los puertos con callback--funcion q se ejecuta despues del listen
function callback(){
    console.log("El servidor se esta ejecutando");
}
appe.listen(port,callback)
//en terminal node AppExpress.js--responde El servidor se esta ejecutando.
//en navegador http://localhost:3000/ y me sale cannot get pero esta sirviendo

//peticion get con funcion anónima, es como la funcion callback, mas resumida, con 2 parametros
//request and response
appe.get("/",(req,res)=> {
    //respuesta de (funcion anonima)callback
    res.send("Hola, mundo!")
}) 

//enviar o redireccionar a /home
appe.get("/home",(req,res)=> {//enviar o redireccionar a /home
    //respuesta de (funcion anonima)callback
    res.send("Estas en la sección Home")
}) 

appe.get("/home/g1",(req,res)=> {//enviar o redireccionar a /home
    //respuesta de (funcion anonima)callback
    res.send("Bienvenido a la clase G1")
}) 