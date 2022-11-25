class Truck{
    constructor(placa, driver){
        this.placa = placa;
        this.driver=driver
    }
//function
    transport(location){
        console.log("El camión con placa "+this.placa+" está transportando el pedido a "+location);
    }
}
export default Truck;