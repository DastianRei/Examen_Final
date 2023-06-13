
function ocurrencia(cadena){
    var arrayCadena = cadena.split(" ");
    var cont =0;

    var array =[];
    console.log(arrayCadena);
    if(arrayCadena.length < 2){
        return 1;
    }
    else{
    for(let j=0;j<arrayCadena.length;j++){
        var palabra = arrayCadena[j].toLowerCase()
        for(let i=0;i<arrayCadena.length;i++){
            if (palabra!="" || palabra!="." ){
                if(palabra==arrayCadena[i].toLowerCase()){
                    cont++;
                }         
            }
            break;    
       }
    }
    }
    return cont;
  
}

export default ocurrencia;