function Computador (marca, procesador, ram, espacio, precio) {
    this.marca = marca;
    this.procesador = procesador;
    this.ram =ram;
    this.espacio = espacio;
    this.precio = precio;
}

const compu1 = new Computador ("Asus", "ADM Ryzen 7", "16 GB", "512 GB", 3100000);
const compu2 = new Computador ("Lenovo", "ADM Ryzen 5", "8 GB", "512 GB", 2500000);
const compu3 = new Computador ("HP", "intel core i7", "32 GB", "512 GB", 4000000);

console.log("1) ", compu1);
console.log("2) ", compu2);
console.log("3) ", compu3);

