//Declarando una función que culcule la distancia entre 2 puntos 
function calculaDistancia(x1,y1,x2,y2) {
    return (Math.sqrt(Math.pow(x2-x1,2) + Math.pow(y2-y1,2)))
}

//Llamar a la función 
console.log(calculaDistancia(1,3,12,0))