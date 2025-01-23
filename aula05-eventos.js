function eventoClick(){
    
    alert('VOCE PRESSIONOU O BUTTON!');
    document.body.style.backgroundColor="yellow";
}
function eventoClick2(){
    
    alert('VOCE PRESSIONOU O BUTTON!');
    document.body.style.backgroundColor="red";
}
function viraVermelho(){
    let div =document.getElementById("teste");
    div.style.backgroundColor="red";
}
function viraAzul(){
    let div =document.getElementById("teste");
    div.style.backgroundColor="blue";
}

function adicionaTexto(){

    let p=document.getElementById("texto");
    p.append('O MOUSE MOVEU<br>');

}