class Plane{

    constructor(placa){
        this.placa = placa;
    }

    transport(location){
        console.log("El avión con placa "+this.placa+" está transportando el pedido a "+location);
    }
}

export default Plane;