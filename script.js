
 const allMusic = [
    {
        name: "Tumi",
        artist: "Abhilekh",
        src: "music/1.mp3",
        img: "image/Tumi.jpg",
    },
    {
        name: "Jamal_kuddu",
        artist: "Harshavardhan Rameswara",
        src: "music/2.mp3",
        img: "image/jamalkuddu.jpg",
    },
    {
        name: "Aradhya",
        artist: "Jubin Nautiyal",
        src: "music/3.mp3",
        img: "image/aradhya.jpg",
    },
    {
        name: "Enelage",
        artist: "Sankuraj konwar ",
        src: "music/4.mp3",
        img: "image/enelage.jpg",
    },
    {
        name: "Unknown",
        artist: "Papon",
        src: "music/papon.mp3",
        img: "image/papon.jpg",
    },
    {
        name: "Saari_Duniya jala_Denge",
        artist: "Jaani,B-praak",
        src: "music/ANIMAL_SAARI DUNIYA JALAA DENGE(Lyrical)  Ranbir_Rashmika_Anil_Bobby_Sandeep_B Praak_Jaani_Bhushan K(MP3_160K).mp3",
        img: "image/animal.jpg",
    },
    {
        name: "Kumoliya mon",
        artist: "Pincool,Rajnish Saikia",
        src: "music/Rajnish _ Pincool - KUMOLIYA MON ft. Madhujya Dutta (Official Audio)(MP3_160K).mp3",
        img: "image/Kumoliyamon.jpg",
    },
    {
        name: "Joubona",
        artist: "Bhaskar Opswel",
        src: "music/Joubona - Bhaskar Opswel _ Nibir X _ Assamese new song _ Bhaskar Opswel new song --New Assamese song(MP3_160K).mp3",
        img: "image/joubona.jpg",
    },
    {
        name: "Nayana",
        artist: "Sannidhya Bhuyan",
        src: "music/Sannidhya Bhuyan x Debangaraj - Nayana (Official Visualiser)(MP3_160K).mp3",
        img: "image/nayana.jpg",
    },

    {
        name: "Ram Siya Ram",
        artist: "__Striven ",
        src: "music/Ram Siya Ram _ _ Lyrical Video _ Siya Ram __   music _ayushadhikari2.089(MP3_160K).mp3",
        img: "image/ram siya.jpg",
    },
    {
        name: "Madhaniya_",
        artist: "Rahul Vaidya",
        src: "music/MADHANYA - Rahul Vaidya _ Disha Parmar _ Asees Kaur _Lijo-DJ Chetas_ Anshul Garg _ Wedding Song 2021(MP3_160K).mp3",
        img: "image/madhania.jpg",
    },
    {
        name: "Kenekoi Bujao",
        artist: "Tanmoy Saikia",
        src: "music/Kenekoi Bujao - Official Music Video _ 13 _Thirteen_ _ 4K _ Tanmoy Saikia _ Rabbani Soyam _ Buddies(MP3_160K).mp3",
        img: "image/Kenekoi Bujai.jpg",
    },
    {
        name: "__Shyamorai Kolia__",
        artist: "_P_a_p_o_n",
        src: "music/Shyamorai Kolia(MP3_160K).mp3",
        img: "image/shyamorai kolia.jpg",
    },
    {
        name: "Xewali__",
        artist: "Bhaskar_Opswal",
        src: "music/Bhaskar Opswel - Xewali [Official Audio](MP3_160K).mp3",
        img: "image/xewali.jpg",
    },
     {
            name: "Baahi",
    artist: "Unknown",
    src: "music/Baanhi - The FolkTroniX _ Pincool Ahmed × Lakhinandan Lahon _ Official  Visualizer(MP3_160K).mp3",
    img: "image/baahi.jpg",

    },

    {
        name: "Radhika",
        artist: "Tanmoy___Saikia",
        src: "music/RADHIKA - Tanmoy Saikia _ STANNiUM _ Kavyashree Gogoi (Official Release)(MP3_160K).mp3",
        img: "image/radhika.jpg",
    },
    {
        name: "Meheman",
        artist: "Sickflip,Mismatch",
        src: "music/Mehmaan Official Lyric Video _  _SICKFLIPOfficial_ Raitila Rajasthan _ Mismatched Season 2(MP3_160K).mp3",
        img: "image/mehmaan.jpg",
    },
    {
        name: "Gaonburrhar podulit",
        artist: "Lakhinandan Lahon,Typhon Music",
        src: "music/GAONBURHAR PODULIT - LAKHINANDAN LAHON x TYPHOON MUSIC _ Abhijeet Baruah _ Official Visualizer(MP3_160K).mp3",
        img: "image/gaonbuhra.jpg",
    },
    {
        name: "Boie___jai___./+__&",
        artist: "Amarendra Kalita",
        src: "music/Boie Jai (OFFICIAL VIDEO)- Amarendra _ Shawn Dex _ Nitupam _ Amlan _ Bornil _ TYPHOON _ Pranjit(MP3_160K).mp3",
        img: "image/boie jai.jpg",
    },
    {
        name: "Deva__Deva",
        artist: " Arjit Singh",
        src: "music/Deva Deva - Extended Film Version_Brahmāstra_Amitabh B_Ranbir __aliabhatt__pritam7415 _Arijit_Jonita(MP3_160K).mp3",
        img: "image/deva deva.jpg",
    },
    {
        name: "Xullo Son",
        artist: "Debabrata Gogoi",
        src: "music/Xullo Son __ Debabrata Gogoi (Debo) __ Full Lyrics Video __ Assamese New Song(MP3_160K).mp3",
        img: "image/xullo son.jpg",
    },
    

  

    // i can Add more songs...
];

const wrapper = document.querySelector(".wrapper");
const musicImg = document.getElementById("musicImg");
const musicName = document.querySelector(".name");
const musicArtist = document.querySelector(".artist");
const playPauseBtn = document.querySelector(".play-pause");
const prevBtn = document.querySelector("#prev");
const nextBtn = document.querySelector("#next");
const mainAudio = document.querySelector("#main-audio");
const progressArea = document.querySelector(".progress-area");
const progressBar = document.querySelector(".progress-bar");
const fileInput = document.querySelector("#file-input");
const maxDuration = document.querySelector(".max-duration");

let isMusicPaused = true;
let currentMusicIndex = 0;

function initialize() {
    loadMusic(allMusic[currentMusicIndex]);
    updatePlaylist();

    fileInput.addEventListener("change", handleFileChange);
    playPauseBtn.addEventListener("click", togglePlayPause);
    prevBtn.addEventListener("click", prevMusic);
    nextBtn.addEventListener("click", nextMusic);
    progressArea.addEventListener("click", handleProgressClick);
    mainAudio.addEventListener("timeupdate", handleTimeUpdate);
    mainAudio.addEventListener("ended", nextMusic);

    const backButton = document.getElementById("backButton");
    backButton.addEventListener("click", () => {
        console.log("Back button clicked");
        window.history.back(); // navigating back in the browser history
    });

    const menuButton = document.getElementById("menuButton");
    menuButton.addEventListener("click", showPlaylistModal);

    const closeBtn = document.querySelector(".close");
    closeBtn.addEventListener("click", () => {
        playlistModal.style.display = "none";
    });

    window.addEventListener("click", (event) => {
        if (event.target === playlistModal) {
            playlistModal.style.display = "none";
        }
    });
}

function loadMusic(music) {
    musicImg.src = music.img;
    musicName.innerText = music.name;
    musicArtist.innerText = music.artist;
    mainAudio.src = music.src;
}

function playMusic() {
wrapper.classList.add("paused");
musicImg.classList.add("rotate");
playPauseBtn.innerHTML = '<i class="fi fi-sr-pause"></i>';
mainAudio.play().then(() => {
isMusicPaused = false;
}).catch((error) => {
console.error("Error playing music:", error);
isMusicPaused = true;
});
}



function pauseMusic() {
    wrapper.classList.remove("paused");
    musicImg.classList.remove("rotate");
    playPauseBtn.innerHTML = '<i class="fi fi-sr-play"></i>';
    mainAudio.pause();
}

function togglePlayPause() {
    isMusicPaused ? playMusic() : pauseMusic();
    isMusicPaused = !isMusicPaused;
}

function prevMusic() {
    currentMusicIndex = (currentMusicIndex - 1 + allMusic.length) % allMusic.length;
    loadMusic(allMusic[currentMusicIndex]);
    playMusic();
}

function nextMusic() {
    currentMusicIndex = (currentMusicIndex + 1) % allMusic.length;
    loadMusic(allMusic[currentMusicIndex]);
    playMusic();
}

function handleFileChange() {
    const selectedFile = fileInput.files[0];

    if (selectedFile) {
        const newMusic = {
            name: selectedFile.name.split(".")[0],
            artist: "Unknown Artist",
            src: URL.createObjectURL(selectedFile),
            img: "assets/image/images.png",
        };

        allMusic.push(newMusic);
        currentMusicIndex = allMusic.length - 1;
        loadMusic(newMusic);
        playMusic();
        updatePlaylist();
    }
}

function handleProgressClick(e) {
    const progressWidth = progressArea.clientWidth;
    const clickedOffsetX = e.offsetX;
    const songDuration = mainAudio.duration;

    mainAudio.currentTime = (clickedOffsetX / progressWidth) * songDuration;
}

function handleTimeUpdate(e) {
    const currentTime = e.target.currentTime;
    const duration = e.target.duration;
    const progressWidth = (currentTime / duration) * 100;
    progressBar.style.width = `${progressWidth}%`;

    const musicCurrentTime = document.querySelector(".current-time");

    const currentMin = Math.floor(currentTime / 60);
    let currentSec = Math.floor(currentTime % 60);
    if (currentSec < 10) {
        currentSec = `0${currentSec}`;
    }
    musicCurrentTime.innerText = `${currentMin}:${currentSec}`;

    const durationMin = Math.floor(duration / 60);
    let durationSec = Math.floor(duration % 60);
    if (durationSec < 10) {
        durationSec = `0${durationSec}`;
    }
    maxDuration.innerText = `${durationMin}:${durationSec}`;
}

function updatePlaylist() {
    const playlistContent = document.getElementById("playlist");
    playlistContent.innerHTML = "";

    allMusic.forEach((music, index) => {
        const listItem = document.createElement("li");
        listItem.innerText = `${index + 1}. ${music.name}`;
        playlistContent.appendChild(listItem);
    });
}

function showPlaylistModal() {
    updatePlaylist();
    playlistModal.style.display = "block";
}

initialize();