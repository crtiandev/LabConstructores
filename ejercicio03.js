function Estudiante (nombre, materia, notas) {
    this.nombre = nombre;
    this.materia = materia;
    this.notas = notas;
    
  this.notaFinal = function() {
     let notaFinal = 0;
     for ( let i = 0;i < this.notas.length; i++ ) {
        notaFinal = notaFinal + this.notas[i];
    }
    return  notaFinal = notaFinal / this.notas.length;
  }

    this.aprobado = function (){
    if (this.notaFinal() >= 3.0){
        return "Aprobo"
    }
    return "Reprobo"
 }  

  this.datosEstudiante = function() {
    return `Estudiante: ${this.nombre}\n Materia: ${this.materia}\n notas: ${this.notas}\n Nota final: ${this.notaFinal()} \n¿Aprobo?: ${this.aprobado()} `;

}
}
const E1 = new Estudiante ("Cristian", "Matematicas", [2.5, 3.0, 2.0]);
const E2 = new Estudiante ("David", "Español", [5.0, 3.0, 2.0]);
const E3 = new Estudiante ("Laura", "Ingles", [5.0, 3.0, 4.0]);

console.log(E1.datosEstudiante());


