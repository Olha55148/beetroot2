// Playlist
const list = document.querySelector('#list');
const title = document.querySelector('#title');
const h1 = document.createElement('h1');
const wrapper = document.querySelector('#wrapper');
h1.innerText = 'PLAYLIST'; 
title.appendChild(h1);

const playList = [{ 
    author: " 1. LED ZEPPELIN",
    song:"STAIRWAY TO HEAVEN"
},
{ 
    author: "2. QUEEN",
    song:"BOHEMIAN RHAPSODY"
},
{ 
    author: "3. LYNYRD SKYNYRD",
    song:"FREE BIRD"
},
{ 
    author: "DEEP PURPLE",
    song:"SMOKE ON THE WATER"
},
{
    author: "JIMI HENDRIX",
    song:"ALL ALONG THE WATCHTOWER"
},
{
    author: "AC/DC",
    song:"BACK IN BLACK"
},
{
    author: "QUEEN",
    song:"WE WILL ROCK YOU"
},
{
    author: "METALLICA",
    song:"ENTER SANDMAN"
},
]

const createListITEM = ({author, song}) => {
    const li = document.createElement('li');
    const p = document.createElement('p');
    const span = document.createElement('span');
    p.innerText = author; 
    span.innerText = song; 
    li.appendChild(p);
    li.appendChild(span);
    return li;
};

playList.forEach((item) => {;
   
   const el = createListITEM(item);
    list.appendChild(el);
    console.log(el);
});
wrapper.style.backgroundColor = 'yellow';
wrapper.style.textAlign = 'center';

// світлофор
const traffic_signal = document.querySelector('#traffic_signal');
const container = document.querySelector('#container');
traffic_signal.classList.add('traffic_signal');
container.classList.add('traffic-light');


const traffic_ligh1 = [
  {text: ""},
  {text: ""},
  {text: ""},
];

const createTraffic = ({text}) => {
    const div = document.createElement('div');
    div.innerText = text; 
    container.appendChild(div);
    
    return div;
};

traffic_ligh1.forEach((item) => {;
   const el = createTraffic(item);
   container.appendChild(el);
    console.log(el);
});


const red = container.children[0];
red.classList.add('red', 'on');




const yellow = container.children[1];
yellow.classList.add('yellow', 'on');

const green = container.children[2];
green.classList.add('green', 'on');



const red1 = document.querySelector('.red');
    const yellow1 = document.querySelector('.yellow');
    const green1 = document.querySelector('.green');

function ChangeLight() {
    
    
    if (red1.classList.contains('on')) {
        red1.classList.remove("on");
        yellow1.classList.add("on");
        green1.classList.add("on");
      


      } else if (yellow1.classList.contains("on")) {
        yellow1.classList.remove("on");
        green1.classList.add("on");
       
        
      } else if (green1.classList.contains("on")) {
        green1.classList.remove("on");
        red1.classList.add("on");
        yellow1.classList.add("on");
      }
    }



    
function switchModal() {
    const modal = document.querySelector('.modal');

    modal.classList.toggle('open');
}


// modal
function openModal() {
    const modal = document.querySelector('.modal');

    modal.classList.add('open');
}

function closeModal() {
    const modal = document.querySelector('.modal');

    modal.classList.remove('open');
}

 



