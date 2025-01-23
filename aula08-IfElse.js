//var hora = new Date().getHours();

if (hora<12){

    alert('Bom dia!');
}
else if(hora < 18){

    alert('Boa tarde!');
}
else{
    alert('Boa noite! Sao:'+ hora +' horas');
}


function verificar(){

    let nome = document.getElementById("nome").value;

    if (nome=="" || nome==null){
        let p =document.getElementById("texto");
        
        p.innerHTML="Preencha o campo abaixo!";
        p.style.color="red";

    }
    else{

        let p =document.getElementById("texto");
        
        p.innerHTML="Parabens, mensagem enviada!";
        p.style.color="green";
    }
}