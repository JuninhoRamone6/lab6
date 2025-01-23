function soma(valor1,valor2){

    return valor1+valor2;
}

function realParaDolar(real,cotaDolar){

    return real*cotaDolar;
}
function alertadolar(){
    alert("O valor em dolar e: "+vreal+" dolares"+" O valor em real e:"+total+" reais");
}


function paraCelsius(valorfahre){
    return(5/9)*(valorfahre-32);
}
function alertaCelsius(){
    alert("A temperatura e: "+x+" graus celsisus!");
}

    let total,cota, vreal;
    
    cota=6.2;
    vreal=10;
    total=realParaDolar(vreal,cota);
    
    let x=paraCelsius(77);
    

    //document.getElementById("texto").innerHTML =soma(10,20);