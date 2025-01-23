function ativarContagem(){
    
    document.getElementById('tempo').innerHTML="Comecou a contar!";
    //EXECUTA APENAS UMA VEZ APOS O TEMPO DETERMINADO
   tempo = setTimeout(function(){ 
        document.getElementById('tempo').innerHTML="executou a contagem!";
    }, 5000);
}
function pararContagem(){

    clearTimeout(tempo);
    document.getElementById('tempo').innerHTML="Parou a contagem!";

}