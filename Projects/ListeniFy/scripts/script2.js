console.log("Welcome to Spotify");

// Initialize the Variables
let songIndex = 0;
let audioElement = new Audio('../../songs/artistwisesongs/11.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));
let audio = document.getElementById('audio');
let volume_slider = document.querySelector(".volume_slider");

let songs = [
    {songName: "Blue Eyes", filePath: "../songs/11.mp3", coverPath: "../../covers/11.jpg"},
    {songName: "Brown Rang", filePath: "../songs/12.mp3", coverPath: "../../covers/12.jpg"},
    {songName: "High Heels", filePath: "../songs/13.mp3", coverPath: "../../covers/13.jpg"},
    {songName: "Love Dose", filePath: "../songs/14.mp3", coverPath: "../../covers/14.jpg"},
    {songName: "Dope Shope", filePath: "../songs/15.mp3", coverPath: "../../covers/15.jpg"},
    {songName: "Paris Ka Trip", filePath: "../songs/16.mp3", coverPath: "../../covers/16.jpg"},
    {songName: "Desi Kalakaar", filePath: "../songs/17.mp3", coverPath: "../../covers/17.jpg"},
    {songName: "One Thousand Miles", filePath: "../songs/18.mp3", coverPath: "../../covers/18.jpg"},
    {songName: "Chaar Botal Vodka", filePath: "../songs/19.mp3", coverPath: "../../covers/19.jpg"},
    {songName: "Dheere Dheere", filePath: "../songs/20.mp3", coverPath: "../../covers/20.jpg"},
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
        masterPlay.classList.remove('fa-circle-pause');
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
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{ 
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        audioElement.src = `../../songs/artistwisesongs/${songIndex+11}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
    })
})

document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=9){
        songIndex = 0
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `../../songs/artistwisesongs/${songIndex+11}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');

})

document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex = 9
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `../../songs/artistwisesongs/${songIndex+11}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
})

function setVolume() {
    audioElement.volume = volume_slider.value / 100;
  }