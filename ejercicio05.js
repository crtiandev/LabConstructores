const prompt = require (`prompt-sync`)();

function Vehiculo (tipo, marca, modelo, color, precio){
    this.tipo = tipo;
    this.marca = marca;
    this.modelo = modelo;
    this.color = color;
    this.precio = precio;
    this.encendido = false;
    this.velocidad = 0;

    this.encender = function(){
        if (this.encendido === false){
            this.encendido = true;
            return `El ${this.tipo} ${this.marca} ${this.modelo} se encendio`
        }
        else {
            return `El ${this.tipo} ya estaba encendio`
        }
    }

    this.acelerar = function(){
        if (this.encendido) {
            this.velocidad += 20;
            return`El ${this.tipo} ${this.marca} ${this.modelo} acelero ${this.velocidad} kl/h`
        }
        else{
           return `no puedes acelerar el vehiculo esta apagado`
        }
    }

    this.frenar = function(){
        if (this.velocidad > 0){
            this.velocidad = 0
            return `El ${this.tipo} ${this.marca} ${this.modelo} ha frendado`
        }
    }
}

 const agregarVehiculo = [];
 let continuar = true;

 while (continuar) {
    console.log(`Registrando Vehiculo`)
    const tipo = prompt("Tipo de Vehiculo: ");
    const marca = prompt("Marca: ");
    const modelo = prompt("Modelo: ");
    const color = prompt("Color: ");
    const precio = prompt("precio: ");
    
    const nuevoVehiculo = new Vehiculo(tipo, marca, modelo, color, precio);
    agregarVehiculo.push(nuevoVehiculo);

    const respuesta = prompt("¿Desea ingresar otro Vehiculo? si/no ").toLowerCase().trim();

    if (respuesta !== "si"){
        continuar = false;
    }
 }
 
 console.log("Finalizado");

 for (const vehiculo of agregarVehiculo){
    console.log(vehiculo)
    console.log(vehiculo.encender())
    console.log(vehiculo.acelerar())
    console.log(vehiculo.acelerar())
    console.log(vehiculo.frenar())
    console.log(vehiculo.acelerar())
    console.log(vehiculo.acelerar())
    
 }

 