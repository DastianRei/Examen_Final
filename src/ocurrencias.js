
function ocurrencia(cadena){
    var arrayCadena = cadena.split(" ");
    var cont =0;
    console.log(arrayCadena);
    if(arrayCadena.length <= 2){
        return 1;
    }
    else{
       return 2;
    }
  
}

export default ocurrencia;