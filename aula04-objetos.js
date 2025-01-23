const carro={
    marca:"ford",
    modelo:"ka",
    ano:2021,
    placa:"ACM2099",
    completo:function(){
        return "A marca e:"+this.marca +" e o modelo e:"+this.modelo;
    },

    buzina:function() {
        alert('BIIIIIIIHHHHHH!')
    }
};

console.log(carro.completo());