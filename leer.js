// importamos la libreria
const fs = require('fs');

// Clase orientada a objetos
class Utileria {
    constructor(fs) {
        this.fs = fs;
    }

    leer(archivo, handler) {
        // Contenido del archivo
        this.fs.readFile(archivo, 'utf8', handler);
    }
}

let utils = new Utileria(fs);
let archivo = "./texto.txt" // Ruta directorio

utils.leer(archivo, function (error, content) {
    if (error) {
        return console.log('Archivo no Encontrado', err);
    } else {
        var textoDividido = content.split(" ");

        console.log("Contenido: ", content.toString());
        console.log("Número Palabras:" , textoDividido.length);
        console.log("Número Letras:" , content.length);
    }
    
});

// LAS PRUEBAS UNITARIAS SE LAS REALIZO CON MONCHA
