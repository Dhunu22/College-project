let music = document.querySelector(".audio");
let playbtn = document.querySelector("#Play");
let Songname = document.getElementById("sn");
let Artistname = document.getElementById("an");
let songimg = document.querySelector(".songposter img");
let nextplay = document.getElementById("Next");
let prevplay = document.getElementById("Prev");
let progressbar = document.querySelector(".pg");
let pbar = document.querySelector(".pgbar");
let body = document.querySelector("body");
let Current_time = document.querySelector(".currenttime");
let Tduration = document.querySelector(".duration");



let index = 0;
let songs = [
    {
    Songname: "Alakananda",
    Artistname: "SHANKURAJ KONWAR, and Tonmoy Krypton ",
    songimg: "a.jpg",
    music: "a.mp3 ",
  },
  {
    Songname: "Mayabini",
    Artistname: "Zubeen",
    songimg: "ab.webp",
    music: "Ab.mp3 ",
  },
  
{
    Songname: "Saari Duniya Jalaa Denge",
    Artistname: "B Praak and Jaani",
    songimg: "b.jpg",
    music: "b.mp3",
},
  {
    Songname: "Aradhya",
    Artistname: "Chinmayi, Hesham Abdul Wahab, and Sid Sriram",
    songimg: "c.jpg",
    music: "c.mp3 ",
  },
  {
    Songname: "Baahi The Folktronix",
    Artistname: "Lakhinandan Lahon and Pincool",
    songimg: "d.jpg",
    music: "d.mp3 ",
  },
  {
    Songname: "Boie Jai",
    Artistname: "Amarendra Kalita, KLANZ, and Shawn Dex",
    songimg: "e.jpg",
    music: "e.mp3 ",
  },
  {
    Songname: "Deva Deva",
    Artistname: "Arjit Singh ",
    songimg: "f.jpg",
    music: "f.mp3 ",
  },
    {
    Songname: "Ene Lage",
    Artistname: "SHANKURAJ KONWAR ",
    songimg: "g.jpg",
    music: "g.mp3 ",
  },
    {
    Songname: "Gaonburhar Podulit",
    Artistname: "Lakhinandan Lahon ",
    songimg: "h.jpg",
    music: "h.mp3 ",
  },
    {
    Songname: "Abrar's Entry Jamal Kudu",
    Artistname: "From ANIMAL",
    songimg: "i.jpg",
    music: "i.mp3 ",
  },
    {
    Songname: "JOUBONA",
    Artistname: "Bhaskar Opswel and Nibir X ",
    songimg: "j.jpg",
    music: "j.mp3 ",
  },
{
    Songname: "Kenekoi Bujao",
    Artistname: "Dhruba Basumatary and Tanmoy Saikia",
    songimg: "k.jpg",
    music: "k.mp3",
},

    {
    Songname: "Tere Jaisa",
    Artistname: "Kamakshi Khanna ",
    songimg: "l.jpg",
    music: "l.mp3 ",
  },
    {
    Songname: "Madhanya",
    Artistname: "Asees Kaur and Rahul Vaidya ",
    songimg: "m.jpg",
    music: "m.mp3 ",
  },
    {
    Songname: "Mehmaan",
    Artistname: "Sickflip,Mismatch ",
    songimg: "n.jpg",
    music: "n.mp3 ",
  },
    {
    Songname: "Nayana",
    Artistname: "Sannidhya Bhuyan ",
    songimg: "o.jpg",
    music: "o.mp3 ",
  },
    {
    Songname: "Panchayat Title",
    Artistname: "Anurag Saikia Panchayat (Music from the Series)  ",
    songimg: "p.jpg",
    music: "p.mp3 ",
  },
    {
    Songname: "Niyor Xemeka",
    Artistname: "Papon",
    songimg: "q.jpg",
    music: "q.mp3 ",
  },
    {
    Songname: "Radhika",
    Artistname: "Tanmoy Saikia ",
    songimg: "r.jpg",
    music: "r.mp3 ",
  },
    {
    Songname: "Ram Siya Ram",
    Artistname: "Ajay-Atul, Parampara Thakur, and Sachet Tandon ",
    songimg: "s.jpg",
    music: "s.mp3 ",
  },
    {
    Songname: "Shyamorai Kolia",
    Artistname: "Papon ",
    songimg: "t.jpg",
    music: "t.mp3 ",
  },
    {
    Songname: "Tumi",
    Artistname: "Bhaskar Opswel ",
    songimg: "u.jpg",
    music: "u.mp3 ",
  },
    {
    Songname: "Xewali",
    Artistname: "Bhaskar Opswel ",
    songimg: "v.jpg",
    music: "v.mp3 ",
  },
    {
    Songname: "Xullo Son",
    Artistname: "Debabrata Gogoi",
    songimg: "w.jpg",
    music: "w.mp3 ",
  },
    {
    Songname: "Kumoliya Mon",
    Artistname: "Pincool and Rajnish Saikia ",
    songimg: "x.jpg",
    music: "x.mp3 ",
  },
];


let isplaying = false;
const playmusic = () => {
  isplaying = true;
  music.play();
  playbtn.classList.replace("fa-play", "fa-pause");
};



const pausemusic = () => {
  isplaying = false;
  music.pause();
  playbtn.classList.replace("fa-pause", "fa-play");
};

playbtn.addEventListener("click", () => {
  isplaying == false ? playmusic() : pausemusic();
});



const loadsong = (songs) => {
  Songname.textContent = songs.Songname;
  Artistname.textContent = songs.Artistname;
  music.src = songs.music;
  songimg.src = songs.songimg;
};


const createHex = () => {
  var hexCode1 = "";
  var hexValues1 = "0dc1c9";
  for (var i = 0; i < 6; i++) {
    hexCode1 += hexValues1.charAt(
      Math.floor(Math.random() * hexValues1.length)
    );
  }
  return hexCode1;
};

const RandomGradientgenerate = () => {
  var deg = Math.floor(Math.random() * 360);
  var gradient =
    "linear-gradient(" +
    deg +
    "deg, " +
    "#" +
    createHex() +
    ", " +
    "#" +
    createHex() +
    ")";
  document.body.style.background = gradient;
};



nextplay.addEventListener(
  "click",
  (nextsong = () => {
    index = (index + 1) % songs.length;
    loadsong(songs[index]);
    isplaying == true ? playmusic() : pausemusic();
    RandomGradientgenerate();
  })
);



prevplay.addEventListener("click", () => {
  index = (index - 1 + songs.length) % songs.length;
  loadsong(songs[index]);
  isplaying == true ? playmusic() : pausemusic();
  RandomGradientgenerate();
});


music.addEventListener("timeupdate", (event) => {
  let { currentTime, duration } = event.srcElement;

 
  let songTime = (currentTime / duration) * 100;
  progressbar.style.width = `${songTime}%`;

 
  let cmin = Math.floor(currentTime / 60);
  let csec = Math.floor(currentTime % 60);
  
  if (currentTime) {
    Current_time.textContent = `${cmin}:${csec}`;
  }

 
  let dmin = Math.floor(duration / 60);
  let dsec = Math.floor(duration % 60);
  if (duration) {
    Tduration.textContent = `${dmin}:${dsec}`;
  }
});


pbar.addEventListener("click", (event) => {
  let { duration } = music;
  let pgbarmove = (event.offsetX / event.srcElement.clientWidth) * duration;
  music.currentTime = pgbarmove;
});


music.addEventListener("ended", nextsong);
