console.log("Welcome to Spotify");

// Initialize the Variables
let songIndex = 0;
let audioElement = new Audio('../../songs/artistwisesongs/31.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));
let audio = document.getElementById('audio');
let volume_slider = document.querySelector(".volume_slider");

let songs = [
    {songName: "We Rollin", filePath: "../songs/31.mp3", coverPath: "../../covers/31.jpg"},
    {songName: "Offshore", filePath: "../songs/32.mp3", coverPath: "../../covers/32.jpg"},
    {songName: "Baller", filePath: "../songs/33.mp3", coverPath: "../../covers/33.jpg"},
    {songName: "Elevated", filePath: "../songs/34.mp3", coverPath: "../../covers/34.jpg"},
    {songName: "No Love", filePath: "../songs/35.mp3", coverPath: "../../covers/35.jpg"},
    {songName: "Cheques", filePath: "../songs/36.mp3", coverPath: "../../covers/36.jpg"},
    {songName: "OG", filePath: "../songs/37.mp3", coverPath: "../../covers/37.jpg"},
    {songName: "Her", filePath: "../songs/38.mp3", coverPath: "../../covers/38.jpg"},
    {songName: "Dior", filePath: "../songs/39.mp3", coverPath: "../../covers/39.jpg"},
    {songName: "The Flow", filePath: "../songs/40.mp3", coverPath: "../../covers/40.jpg"},
]
songItems.forEach((element, i)=>{ 
    element.getElementsByTagName("img")[0].src = songs[i].coverPath; 
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName; 
})

// Handle play/pause click
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-circle-play');
        gif.style.opacity = 0;
    }
})
// Listen to Events
audioElement.addEventListener('timeupdate', ()=>{ 
    // Update Seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)* 100); 
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-circle-play');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{ 
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `../../songs/artistwisesongs/${songIndex+31}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-pause-circle');
    })
})

document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=9){
        songIndex = 0
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `../../songs/artistwisesongs/${songIndex+31}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-pause-circle');

})

document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex = 9
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `../../songs/artistwisesongs/${songIndex+31}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-pause-circle');
})

function setVolume() {
    audioElement.volume = volume_slider.value / 100;
  }