function Mascota (nombre, especie, edad, peso,) {
    this.nombre = nombre;
    this.especie = especie;
    this.edad = edad;
    this.peso = peso;

    this.presentarse = function() {
        return `Mi nombre es ${this.nombre}\n soy ${this.especie}\n tengo ${this.edad} años\n peso ${this.peso} kilos`;
    }
}

const peludo1 = new Mascota ("Kira", "Perra Pitbull", 2, 3);
const peludo2 = new Mascota ("mono", "gato", 1, 1);
const peludo3 = new Mascota ("niño", "Perro criollo", 5, 2);


console.log(peludo1.presentarse())
console.log(peludo2.presentarse())
console.log(peludo3.presentarse())



