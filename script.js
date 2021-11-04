console.log("Welcome to Spotify");


let songIndex=0;
let audioElement = new Audio("songs/1.mp3");

let masterPlay = document.getElementById("masterPlay");
let myProgressBar = document.getElementById("myProgressBar");
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItem = Array.from(document.getElementsByClassName("songItems"));
let songs = [
    {songName: "Warriyo - Mortals [NCS Release]", filePath: "songs/1.mp3", coverPath: "covers/1.jpg"},
    {songName: "Song2", filePath: "songs/2.mp3", coverPath: "covers/2.jpg"},
    {songName: "Song3", filePath: "songs/3.mp3", coverPath: "covers/3.jpg"},
    {songName: "Song4", filePath: "songs/4.mp3", coverPath: "covers/4.jpg"},
    {songName: "Song5", filePath: "songs/5.mp3", coverPath: "covers/5.jpg"},
    {songName: "Song6", filePath: "songs/6.mp3", coverPath: "covers/6.jpg"},
    {songName: "Song7", filePath: "songs/7.mp3", coverPath: "covers/7.jpg"},
    {songName: "Song8", filePath: "songs/8.mp3", coverPath: "covers/8.jpg"},
    {songName: "Song9", filePath: "songs/9.mp3", coverPath: "covers/9.jpg"},
    {songName: "Song10", filePath: "songs/10.mp3", coverPath: "covers/10.jpg"},
   
]

songItem.forEach((element,i)=>{
   
    element.getElementsByTagName("img")[0].src= songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText= songs[i].songName;
})

// audioElement.play()

    //Handle Play PAuse Click
    masterPlay.addEventListener('click',()=>{
        if(audioElement.paused || audioElement.currentTime<=0){
            audioElement.play();
            masterPlay.classList.remove("fa-play-circle")
            masterPlay.classList.add("fa-pause-circle")
            gif.style.opacity = 1;
        }
        else{
            audioElement.pause();
            masterPlay.classList.remove("fa-pause-circle")
            masterPlay.classList.add("fa-play-circle")
            gif.style.opacity = 0;
        }
    })


//Listen

audioElement.addEventListener('timeupdate',()=>{
  
// update seekBAr
progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
myProgressBar.value = progress;
})

myProgressBar.addEventListener("change",()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})
const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemsPLay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}


Array.from(document.getElementsByClassName('songItemsPLay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{ 
        makeAllPlays();
        masterSongName.innerText=songs[songIndex].songName;
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `songs/${songIndex}.mp3`;
        audioElement.currentTime=0;
        audioElement.play();
        masterPlay.classList.remove("fa-play-circle")
        masterPlay.classList.add("fa-pause-circle")
                
    })
})



document.getElementById("next").addEventListener('click', ()=>{
    if(songIndex>=9){
        songIndex=0
    }
    else{
        songIndex+=1;
    }
    audioElement.src = `songs/${songIndex}.mp3`;
    audioElement.currentTime=0;
    masterSongName.innerText=songs[songIndex].songName;
    audioElement.play();
    masterPlay.classList.remove("fa-play-circle")
    masterPlay.classList.add("fa-pause-circle")
})

document.getElementById("previous").addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex=0
    }
    else{
        songIndex-=1;
    }
    audioElement.src = `songs/${songIndex}.mp3`;
    audioElement.currentTime=0;
    masterSongName.innerText=songs[songIndex].songName;
    audioElement.play();
    masterPlay.classList.remove("fa-play-circle")
    masterPlay.classList.add("fa-pause-circle")
})