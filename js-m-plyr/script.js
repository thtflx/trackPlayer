// // !(1) Find elements
// const musicContainer = document.getElementById('music-container');
// const playBtn = document.getElementById('play');
// const prevBtn = document.getElementById('prev');
// const nextBtn = document.getElementById('next');

// const audio = document.getElementById('audio');
// const progressContainer = document.getElementById('progress-container');
// const progress = document.getElementById('progress');
// const title = document.getElementById('title');
// const cover = document.getElementById('cover');
// const currTime = document.querySelector('#currTime');
// const durTime = document.querySelector('#durTime');


// // !(2) Song titles
// const songs = [
//     'Juice WRLD Ft Benny Blanco - Real Shit',
//     'Lil Baby, Lil Durk ft Rodwave - Rich Off Pain',
//     'NEFFEX - New Year, New Me',
//     'Polo G – I Know'
// ];


// // !(3) Keep track of song
// let songIndex = 0;


// // !(4) Initially load song details into DOM
// loadSong(songs[songIndex]);


// // !(5) Update song details
// function loadSong(song) {
//     title.innerText = song;
//     audio.src = `music/${song}.mp3`;
//     cover.src = `images/${song}.jpg`;
// }


// // !(7) Play song
// function playSong() {
//     musicContainer.classList.add('play');
//     playBtn.querySelector('i.fas').classList.remove('fa-play');
//     playBtn.querySelector('i.fas').classList.add('fa-pause');

//     audio.play();
// }


// // !(8) Pause song
// function pauseSong() {
//     musicContainer.classList.remove('play');
//     playBtn.querySelector('i.fas').classList.add('fa-play');
//     playBtn.querySelector('i.fas').classList.remove('fa-pause');

//     audio.pause();
// }


// // !(9) Previous song
// function prevSong() {
//     songIndex--;

//     if (songIndex < 0) {
//         songIndex = songs.length - 1;
//     }

//     loadSong(songs[songIndex]);

//     playSong();
// }


// // !(10) Next song
// function nextSong() {
//     songIndex++;

//     if (songIndex > songs.length - 1) {
//         songIndex = 0;
//     }

//     loadSong(songs[songIndex]);

//     playSong();
// }


// // !(13) Event listeners
// playBtn.addEventListener('click', () => {
//     const isPlaying = musicContainer.classList.contains('play');

//     if (isPlaying) {
//         pauseSong();
//     } else {
//         playSong();
//     }
// });


// // !(14) Change song
// prevBtn.addEventListener('click', prevSong);
// nextBtn.addEventListener('click', nextSong);


// // KERAK EMAS.
// // !(11) Update progress bar
// function updateProgress(e) {
//     const { duration, currentTime } = e.srcElement;
//     const progressPercent = (currentTime / duration) * 100;
//     progress.style.width = `${progressPercent}%`;
// }

// // !(12) Set progress bar
// function setProgress(e) {
//     const width = this.clientWidth;
//     const clickX = e.offsetX;
//     const duration = audio.duration;

//     audio.currentTime = (clickX / width) * duration;
// }


// // KERAK EMAS.
// // !(15) Time/song update
// audio.addEventListener('timeupdate', updateProgress);

// // !(16) Click on progress bar
// progressContainer.addEventListener('click', setProgress);

// // !(17) Song ends
// audio.addEventListener('ended', nextSong);

// // !(18) Time of song
// audio.addEventListener('timeupdate', DurTime);





// !TRY
// todo 1.
// const musicContainer = document.getElementById('music-container');
// const prevBtn = document.getElementById('prev');
// const playBtn = document.getElementById('play');
// const nextBtn = document.getElementById('next');
// const audio = document.getElementById('audio');
// const title = document.getElementById('title');
// const cover = document.getElementById('cover');

// const progressContainer = document.getElementById('progress-container');
// const progress = document.getElementById('progress');
// const currentTime = document.querySelector('#currTime');
// const durTime = document.querySelector('#durTime');


// * try-1st.
const musicContainer = document.querySelector('#music-container'),
    prevBtn = document.querySelector('#prev'),
    playBtn = document.querySelector('#play'),
    nextBtn = document.querySelector('#next'),
    audio = document.querySelector('#audio'),
    title = document.querySelector('#title'),
    coverImg = document.querySelector('#cover');



// todo 2.
// const songs = [
//     'Juice WRLD Ft Benny Blanco - Real Shit',
//     'Lil Baby, Lil Durk ft Rodwave - Rich Off Pain',
//     'NEFFEX - New Year, New Me',
//     'Polo G – I Know'
// ];

// * try-2nd.
const songs = [
    'Juice WRLD Ft Benny Blanco - Real Shit',
    'Lil Baby, Lil Durk ft Rodwave - Rich Off Pain',
    'NEFFEX - New Year, New Me',
    'Polo G – I Know'
];




// todo 3.
// let songIndex = 0;

// *try-3rd.
let songIndex = 0;


// todo 4.
// loadSong(songs[songIndex]);

// *try-4th.
loadSong(songs[songIndex]);



// todo 5.
// function loadSong(song) {
//     title.innerText = song;
//     audio.src = `music/${song}.mp3`;
//     cover.src = `images/${song}.jpg`;
// }

// function loadSong(song) {
//     title.innerHTML = song;
//     audio.src = `music/${song}.mp3`;
//     audio.src = `images/${song}.jpg`;
// }

// function loadSong(song) {
//     title.innerHTML = song;
//     audio.src = `music/${song}.mp3`;
//     cover.src = `images/${song}.jpg`;
// }

// function loadSong(song) {
//     title.innerHTML = song;
//     audio.src = `music/${song}.mp3`;
//     cover.src = `images/${song}.jpg`;
// }

// function loadSong(song) {
//     title.innerHTML = song;
//     audio.src = `music/${song}.mp3`;
//     cover.src = `images/${song}.jpg`;
// }


// *try-5th.
function loadSong(song) {
    title.innerHTML = song;
    audio.src = `music/${song}.mp3`;
    cover.src = `images/${song}.jpg`;
}


// function loadSong(song) {
//     title.innerHTML = song;
//     audio.src = `music/${song}.mp3`;
//     cover.src = `images/${song}.jpg`;
// }



// todo 6.
// function playSong() {
//     musicContainer.classList.add('play');
//     playBtn.querySelector('i.fas').classList.remove('fa-play');
//     playBtn.querySelector('i.fas').classList.add('fa-pause');

//     audio.play();
// }

// function playSong() {
//     musicContainer.classList.add('play');
//     playBtn.querySelector('i.fas').classList.remove('fa-play');
//     playBtn.querySelector('i.fas').classList.add('fa-pause');

//     audio.play();
// }

// function playSong() {
//     musicContainer.classList.add('play');
//     playBtn.querySelector('i.fas').classList.add('fa-pause');
//     playBtn.querySelector('i.fas').classList.remove('fa-play');

//     audio.play();
// }

// function playSong() {
//     musicContainer.classList.add('play');
//     playBtn.querySelector('i.fas').classList.remove('fa-play');
//     playBtn.querySelector('i.fas').classList.add('fa-pause');

//     audio.play();
// }

// function playSong() {
//     musicContainer.classList.add('play');
//     playBtn.querySelector('i.fas').classList.add('fa-pause');
//     playBtn.querySelector('i.fas').classList.remove('fa-play');

//     audio.play();
// }

// * try-6th.
function playSong() {
    musicContainer.classList.add('play');
    playBtn.querySelector('i.fas').classList.add('fa-pause');
    playBtn.querySelector('i.fas').classList.remove('fa-play');

    audio.play();
}



// todo 7.
// function pauseSong() {
//     musicContainer.classList.remove('play');
//     playBtn.querySelector('i.fas').classList.add('fa-play');
//     playBtn.querySelector('i.fas').classList.remove('fa-pause');

//     audio.pause();
// }

// function pauseSong() {
//     musicContainer.classList.add('pause');
//     playBtn.querySelector('i.fas').classList.add('fa-play');
//     playBtn.querySelector('i.fas').classList.remove('fa-pause');

//     audio.pause();
// }

// function pauseSong() {
//     musicContainer.classList.add('pause');
//     playBtn.querySelector('i.fas').classList.add('fa-play');
//     playBtn.querySelector('i.fas').classList.remove('fa-pause');

//     audio.pause();
// }


// * try-7th.
function pauseSong() {
    musicContainer.classList.add('pause');
    playBtn.querySelector('i.fas').classList.add('fa-play');
    playBtn.querySelector('i.fas').classList.remove('fa-pause');

    audio.pause();
}


// todo 8.
// function prevSong() {
//     songIndex--;

//     if (songIndex < 0) {
//         songIndex = songs.length - 1;
//     }

//     loadSong(songs[songIndex]);

//     playSong();
// }

// function prevSong() {
//     songIndex--;

//     if (songIndex < 0) {
//         songIndex = songs.length - 1;
//     }

//     loadSong(songs[songIndex]);

//     playSong();
// }

// function prevSong() {
//     songIndex--;

//     if (songIndex < 0) {
//         songIndex = songs.length - 1;
//     }

//     loadSong(songs[songIndex]);

//     playSong();
// }

// function prevSong() {
//     songIndex--;

//     if (songIndex < 0) {
//         songIndex = songs.length - 1;
//     }

//     loadSong(songs[songIndex]);

//     playSong();
// }

// function prevSong() {
//     songIndex--;

//     if (songIndex < 0) {
//         songIndex = songs.length - 1;
//     }

//     loadSong(songs[songIndex]);

//     playSong();
// }


// * try-8th.
function prevSong() {
    songIndex--;

    if (songIndex < 0) {
        songIndex = songs.length - 1;
    }

    loadSong(songs[songIndex]);

    playSong();
}


// todo 9.
// function nextSong() {
//     songIndex++;

//     if (songIndex > songs.length - 1) {
//         songIndex = 0;
//     }

//     loadSong(songs[songIndex]);

//     playSong();
// }

// function nextSong() {
//     songIndex++;

//     if (songIndex > songs.length - 1) {
//         songIndex = 0;
//     }

//     loadSong(songs[songIndex]);

//     playSong();
// }


// * try-9th.
function nextSong() {
    songIndex++;

    if (songIndex > songs.length - 1) {
        songIndex = 0;
    }

    loadSong(songs[songIndex]);

    playSong();
}


// todo 10.
// playBtn.addEventListener('click', () => {
//     const isPlaying = musicContainer.classList.contains('play');

//     if (isPlaying) {
//         pauseSong();
//     } else {
//         playSong();
//     }
// });

// playBtn.addEventListener('click', () => {
//     const isPlaying = musicContainer.classList.contains('play');

//     if (isPlaying) {
//         pauseSong();
//     } else {
//         playSong();
//     }
// });

// playBtn.addEventListener('click', () => {
//     const isPlaying = musicContainer.classList.contains('play');

//     if (isPlaying) {
//         pauseSong();
//     } else {
//         playSong();
//     }
// });


// * try-10th.
playBtn.addEventListener('click', () => {
    const isPlaying = musicContainer.classList.contains('play');

    if (isPlaying) {
        pauseSong();
    } else {
        playSong();
    }
});



// todo 11.
// prevBtn.addEventListener('click', prevSong);
// nextBtn.addEventListener('click', nextSong);

// prevBtn.addEventListener('click',prevSong);
// nextBtn.addEventListener('click',nextSong);


// * try-11th.
prevBtn.addEventListener('click', prevSong);
nextBtn.addEventListener('click', nextSong);






// ! try.
// // 1 - elementlarni topib olamiz.
// const musicContainer = document.querySelector('#music-container');
// const title = document.querySelector('#title');
// const audio = document.querySelector('#audio');
// const cover = document.querySelector('#cover');
// const prevBtn = document.querySelector('#prev');
// const nextBtn = document.querySelector('#next');
// const playBtn = document.querySelector('#play');


// // 2 - songsni bitta massivga yig'amiz.
// const songs = [
//     'Juice WRLD Ft Benny Blanco - Real Shit',
//     'Lil Baby, Lil Durk ft Rodwave - Rich Off Pain',
//     'NEFFEX - New Year, New Me',
//     'Polo G – I Know'
// ];


// // 3 - song'ga index beramiz.
// let songIndex = 0;


// // 4 - loadSong'ga songs va indexini beramiz.
// loadSong(songs[songIndex]);


// // 5 - loadSong func.
// function loadSong(song) {
//     title.innerHTML = song;
//     audio.src = `music/${song}.mp3`;
//     cover.src = `images/${song}.jpg`;
// }


// // 6 - playSong func.
// function playSong() {
//     musicContainer.classList.add('play');
//     playBtn.querySelector('i.fas').classList.add('fa-pause');
//     playBtn.querySelector('i.fas').classList.remove('fa-play');

//     audio.play();
// }


// // 7 - pauseSong func.
// function pauseSong() {
//     musicContainer.classList.remove('play');
//     playBtn.querySelector('i.fas').classList.remove('fa-pause');
//     playBtn.querySelector('i.fas').classList.add('fa-play');

//     audio.pause();
// }


// // 8 - prevSong func.
// function prevSong() {
//     songIndex--;

//     if (songIndex < 0) {
//         songIndex = songs.length - 1;
//     }

//     loadSong(songs[songIndex]);

//     playSong();
// }


// // 9 - nextSong func.
// function nextSong() {
//     songIndex++;

//     if (songIndex > songs.length - 1) {
//         songIndex = 0
//     }

//     loadSong(songs[songIndex]);

//     playSong();
// }


// // 10 - playBtn ga addEL qo'shish.
// playBtn.addEventListener('click', () => {
//     const isPlaying = musicContainer.classList.contains('play');

//     if (isPlaying) {
//         pauseSong();

//     } else {
//         playSong();
//     }
// });


// // 11 - nextBtn va prevBtn ga addEL qo'shish.
// nextBtn('click', nextSong);
// prevBtn('click', prevSong);