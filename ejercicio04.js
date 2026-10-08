function Libro (seccion, autor, titulo){
    this.prestado = false;
    this.autor = autor;
    this.titulo = titulo;
    this.seccion = seccion;

    this.prestar = function(){
        if (this.prestado === false){
          this.prestado = true
          return `Libro ${this.titulo} disponible`
        }
        else {
           return `Alerta el libro ${this.titulo} ya esta prestado`
        } 
    } 

    this.devolver= function(){
        if (this.prestado === true){
          this.prestado = false
          return `Libro ${this.titulo} devuelto y disponible`
        }
        else {
           return `Inconsistencia el libro ya esta disponible en la biblioteca`
        } 
    }
}

const L1 = new Libro ("Romance", "Julia Quinn", "El duque y yo");

console.log(L1, L1.prestar());
console.log(L1.prestar())
console.log(L1.devolver())
console.log(L1.devolver())