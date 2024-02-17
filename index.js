let Coche = {
    marca: "",
    modelo: "",
    matricula: "",
}

let Casa = {
    codPostal: "",
    calle: "",
    portal: "",
    piso: "",
}

let FullStackDeveloper = {
    lenguajes: [],
    proyectos: [],
}

let Perro = {
    nombre: "",
    raza: "",
    color: "",
    edad: "",
    ladrar: function () {
        console.log("");
    },
    popo: function () {
        return Math.random() * 3;
    }
}

let marcaPortatil = Portatil.marca;

let marcaPortatil2 = Portatil["marca"];

let grupos = Concierto.grupos;

let RGB = [Led.rojo, Led.verde, Led.azul];

Impresora.imprimiendo = {
    nombreArchivo: "",
    copias: "",
    numPaginas: "",
}

Portatil.modelo = "P345";

Concierto.cartelera.push("Guns N' Roses");

Concierto.fecha = new Date();

let Noticia = {
    titular: "",
    cuerpo: "",
}

let Persona = {
    nombre: "",
    apellidos: "",
    edad: "edad",
}

let Pais = {
    numHabitantes: "",
    continente: "",
    gentilicio: "",
}

let Avion = {
    numPasajeros: "",
    despegar: function () {
        console.log("despegando");
    },
    volar: function () {
        console.log("llegando al destino");
    },
    aterrizar: function () {
        console.log("aterrizando");
    },
}

let Paquete = {
    contenido: [{}, {}]
};

let codError = O_Error.codigo;

let integrantes = Grupo.integrantes;

let nivelesTinta = Impresora.tinta;

let pixeles = Pantalla.pixeles;

let especificaciones = Movil["especificaciones"];

Grupo.numIntegrantes = 5;

Pantalla.dimensiones = "1920x1080";

Led.encendido = !Led.encendido;

Movil.temperatura = "20º";





