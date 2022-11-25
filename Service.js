import Truck from "./Truck.js";

//es una clase
class Service{
    idService = 0;
    
    constructor(){
        this.generarId()
    }

    generarId(){
        //libreria de matematicas de js
        this.idService = Math.random().toString(36).slice(2);
    }

    obteinTransport(){
        return new Truck(this.idService, "Marco")
    }
}

export default Service;