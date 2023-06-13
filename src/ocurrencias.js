
function ocurrencia(cadena){
    var arrayCadena = cadena.split(" ");
    var cont =0;
    var palabra = arrayCadena[0].toLowerCase();
    console.log(arrayCadena);
    if(arrayCadena.length <= 2){
        return 1;
    }
    else{
       for(let i=0;i<arrayCadena.length;i++){
            if (palabra!=""){
                if(palabra==arrayCadena[i].toLowerCase()){
                    cont++;
                }
            }
       }

    }
    return cont;
  
}

export default ocurrencia;