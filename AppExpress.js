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