
var ano =new Date().getFullYear();

for (let i=ano; i >= 1990 ; i--){
    document.getElementById("ano").innerHTML  += "<option value=' " +i+"'> "+i+"</option>";
}

const carros=["gol", "fusca", "Brasilia", "Del Rey"];
var tamanho = carros.length;

for (let i=0; i<tamanho; i++){
    document.getElementById("teste").innerHTML+=carros[i] + " - ";
}