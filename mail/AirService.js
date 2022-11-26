import Service from "./Service.js";
import Truck from "./Truck.js";
import Plane from "./Plane.js";
//es una clase
class AirService extends Service{
    
    //esto ya viene de service asi que aca lo borro
    //idService = 0;
    
    //constructor(){
       // this.generarId()
    //}

    //generarId(){
       // libreria de matematicas de js
        //this.idService = Math.random().toString(36).slice(2);
    //}

    //con este uso al padre
    constructor(){
        super()
    }
    obteinTransport(){
        return new Plane(this.idService)
    }
    
}

export default AirService;