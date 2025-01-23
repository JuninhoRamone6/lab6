const lista = ["arroz","feijao", "macarrao", "carne", "leite"];
const lista2=["pera","melancia", "caju", "abacate", "limao"];

const pessoa ={
    nome:"Claudio",
    sobrenome:"Crisostomo",
    idade:31,
};

const num =[3,4,345,53,52,1,23,45,56,21,3];
const maior20=num.filter(filtro);

//lista.splice(2,0, "Item adicionado 1","Item adicionado 2");
const superlista = lista.concat(lista2);

//lista.unshift("farinha"); adiciona na frente da matriz
//lista.shift();//remove o primeiro da matriz
//lista.pop(); remove o ultimo da matriz
superlista.sort();
superlista.reverse();

num.sort(function(a,b){return a-b});


function maiorNum(array){
    return Math.max.apply(null,array);
}

function menorNum(array){
    return Math.min.apply(null,array);
}
function filtro(value,index,array){
    return value > 20;
}


document.getElementById("texto").innerHTML=maior20;