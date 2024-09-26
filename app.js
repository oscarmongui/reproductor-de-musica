const tituloCancion = document.querySelector(".reproductor-música h1");
const artista = document.querySelector(".reproductor-música p");

const progreso = document.getElementById("progreso");
const cancion = document.getElementById("cancion");

const iconoplay = document.getElementById("iconoplay");
const botonReproducirPausar = document.querySelector(".controles button.boton-reproducir-pausar");

const botonAtras = document.querySelector(".controles button.atras");
const botonAdelante = document.querySelector(".controles button.adelante");

const canciones = [
    {
        titulo:" Canela en Rama",
        nombre : "El Kanka",
        fuente : "musica/youtubedownloader.net - Canela en Rama.mp3"
    },
    {
        titulo:" Disfruto",
        nombre : "Carla Morrison",
        fuente : "musica/youtubedownloader.net - Carla Morrison - Disfruto (letra).mp3"
    },
    {
        titulo:" Carmesí",
        nombre : "Vicente García",
        fuente : "musica/youtubedownloader.net - Carmesí.mp3"
    },
    {
        titulo:" Ojos Marrones",
        nombre : "Sebastián Yatra",
        fuente : "musica/youtubedownloader.net - Ojos Marrones (Remix).mp3"
    },
    {
        titulo:" Andar Conmígo",
        nombre : "Julieta Venegas",
        fuente : "musica/youtubedownloader.net - Julieta Venegas - Andar Conmigo __ Letra.mp3"
    },
    {
        titulo:"Que Nadie Sepa Mi Sufrir",
        nombre : "Puerto Candelaria",
        fuente : "musica/youtubedownloader.net - Que Nadie Sepa Mi Sufrir.mp3"
    },
    {
        titulo:" Soledad y Mar",
        nombre : "Natalia Lafourcade",
        fuente : "musica/youtubedownloader.net - Soledad y el Mar.mp3"
    },
    {
        titulo:" La Distancia",
        nombre : "Manuel Medrano",
        fuente : "musica/youtubedownloader.net - La Distancia.mp3"
    },
    {
        titulo:" Primera Cita",
        nombre : "Carín León",
        fuente : "musica/youtubedownloader.net - Primera Cita.mp3"
    },
    {
        titulo:" Chismofilia",
        nombre : "Luis Alfonso",
        fuente : "musica/youtubedownloader.net - Chismofilia.mp3"
    },
    {
        titulo:" Mi Ex Tenía Razón",
        nombre : "Karol G",
        fuente : "musica/youtubedownloader.net - MI EX TENÍA RAZÓN.mp3"
    },
    {
        titulo:"Si Antes Te Hubiera Conocido",
        nombre : "Karol G",
        fuente : "musica/youtubedownloader.net - Si Antes Te Hubiera Conocido.mp3"
    },
]

let indiceCancionActual = 0;

function actualizarInfoCancion(){
    tituloCancion.textContent = canciones[indiceCancionActual].titulo;
    artista.textContent = canciones[indiceCancionActual].nombre;
    cancion.src = canciones[indiceCancionActual].fuente;
    cancion.addEventListener("loadeddata",function(){});
};

botonReproducirPausar.addEventListener("click",reproducirPausar);

function reproducirPausar () {
    if(cancion.paused){
        reproducirCancion();
        iconoplay.classList.add("bi-pause-fill")
        iconoplay.classList.remove("bi-play-fill")
        iconoplay.classList.remove("bi-play")
        console.log ("Cambiado a pausa");
    } else {
        pausarCancion();
        iconoplay.classList.add("bi-play")
        iconoplay.classList.remove("bi-pause-fill")
    }
};
function reproducirCancion() {
    cancion.play();
};
function pausarCancion(){
    cancion.pause();
}
actualizarInfoCancion();