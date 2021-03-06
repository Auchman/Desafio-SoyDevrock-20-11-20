const audio = document.getElementById("audio");
const playPause = document.getElementById("play");
const barra = document.getElementById("barra");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const titulo = document.getElementById("titulo");

const notas = document.getElementById("notas");

let songs = ["./music/Bajan.mp3", "./music/Jingle-Bells.mp3", "./music/I-FINK-U-FREEKY.mp3"];

let currentSong = 0;
window.onload = playSong();

function playSong(){
    

    audio.src = songs[currentSong];
    audio.play();
    titulo.textContent = songs[currentSong];
}

playPause.addEventListener("click", ()=>{

    if (audio.paused || audio.ended) {
        playPause.querySelector(".pause-btn").classList.toggle("d-none");
        playPause.querySelector(".play-btn").classList.toggle("d-none");
        audio.play();

        // notas.className = "note-mov";
    }else{
        audio.pause();
        playPause.querySelector(".pause-btn").classList.toggle("d-none");
        playPause.querySelector(".play-btn").classList.toggle("d-none");

        // notas.className = "";
    }
})

audio.addEventListener("timeupdate", () =>{
    let position = audio.currentTime || song.duration;
    barra.style.width = position * 0.5 + "%" ;
})

next.addEventListener("click", ()=>{
    currentSong++;
    if(currentSong>2){
        currentSong=0;
    }
    currentSong++;

    playPause.querySelector(".pause-btn").classList.toggle("d-none");
    playPause.querySelector(".play-btn").classList.toggle("d-none");

    playSong();
})

prev.addEventListener("click", ()=>{
    currentSong--;
    if(currentSong<0){
        currentSong=2;
    }

    playSong();
})


