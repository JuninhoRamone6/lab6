
//OBJETO
const carro = {
    marca:"fiat",
    modelo:"Uno",
    ano:2011
};

//CLASSE

class Car {
    constructor(obj1, obj2, obj3){
        this.marca = obj1;
        this.modelo = obj2;
        this.ano = obj3;
        
    }
    buzina(){
        return this.modelo + " Buzinou: Biiiiiii!!!";
    }

}

const uno = new Car("fiat","Uno",2011);
const gol =new Car("Volkswagen","Gol",2020);
gol.ano = 2014; // alterar objeto de classe 
console.log(gol.ano);