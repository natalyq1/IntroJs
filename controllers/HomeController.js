let publicaciones = []

export function createPublicacion(req,res){
//aca creare un arreglo para poder guardar las publicaciones
   let id =Math.random().toString(36).slice(2)

    let publicacion = {
        "Nuestra publicacion:":req.body.publicacion,
        //"Identificador no. ":id
        //version desestructurada
        id
    }

   res.json(publicacion)
    //aca llamo a donde guardare las publicaciones
    publicaciones.push(publicacion)
}

export function readPublicaciones(req,res){
    res.json(publicaciones)
}
export function readPublicacion(req,res){

    let id= req.params.id

    for (let i = 0; i < publicaciones.length; i++) {
        
        var publicacion = publicaciones[i]
        if (publicacion.id == id) {
            break;            
        }
        
    }
    res.json(publicacion)

    /*otra forma de hacer el ciclo
    let publicacion =null;
    publicaciones.forEach(element => {
        if(element.id ==id){
            publicacion=element
        }
    });*/
}