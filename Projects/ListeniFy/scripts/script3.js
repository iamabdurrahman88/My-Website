console.log("Welcome to Spotify");

// Initialize the Variables
let songIndex = 0;
let audioElement = new Audio('../../songs/artistwisesongs/21.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));
let audio = document.getElementById('audio');
let volume_slider = document.querySelector(".volume_slider");

let songs = [
    {songName: "Satisfya", filePath: "../songs/21.mp3", coverPath: "../../covers/21.jpg"},
    {songName: "Amplifier", filePath: "../songs/22.mp3", coverPath: "../../covers/22.jpg"},
    {songName: "Bewafa", filePath: "../songs/23.mp3", coverPath: "../../covers/23.jpg"},
    {songName: "Knightridah", filePath: "../songs/24.mp3", coverPath: "../../covers/24.jpg"},
    {songName: "Aaja We Mahiya", filePath: "../songs/25.mp3", coverPath: "../../covers/25.jpg"},
    {songName: "Pata Chalgea", filePath: "../songs/26.mp3", coverPath: "../../covers/26.jpg"},
    {songName: "Imaginary", filePath: "../songs/27.mp3", coverPath: "../../covers/27.jpg"},
    {songName: "President Roley", filePath: "../songs/28.mp3", coverPath: "../../covers/28.jpg"},
    {songName: "Hey Girl", filePath: "../songs/29.mp3", coverPath: "../../covers/29.jpg"},
    {songName: "On My Way", filePath: "../songs/30.mp3", coverPath: "../../covers/30.jpg"},
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
        audioElement.src = `../../songs/artistwisesongs/${songIndex+21}.mp3`;
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
    audioElement.src = `../../songs/artistwisesongs/${songIndex+21}.mp3`;
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
    audioElement.src = `../../songs/artistwisesongs/${songIndex+21}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-pause-circle');
})

function setVolume() {
    audioElement.volume = volume_slider.value / 100;
  }