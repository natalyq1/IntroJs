
//cuando es import es q se extiende de alla, este caso de Service.js el Service
import Service from "./Service.js";
import AirService from "./AirService.js";
import Plane from "./Plane.js";
//nuestra aplicación de mansajería
const landService = new Service();
const landService2 = new Service();
const airService = new AirService();
const airService2 = new AirService();

function sendPackage(service, location){
    const transport = service.obteinTransport();
    transport.transport(location);
}

sendPackage(airService, "Bucaramanga")
sendPackage(airService, "Riohacha")
sendPackage(airService2, "Bogotá")
sendPackage(landService, "Cali")
sendPackage(landService, "Otra Ciudad")
sendPackage(landService2, "Pereira")

//creamos un service
//const service = new Service()
//service.generarId()

//const truck = service.obteinTransport();
//truck.transport("Bogota");
