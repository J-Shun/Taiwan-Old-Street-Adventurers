const memory = [
    {
        id : 1,
        img: "./imgs/zoo_assemble.jpg",
        info: "TSA assemble, Muzha Zoo"
    },
    {
        id : 2,
        img: "./imgs/sunset.jpg",
        info: "Sunset, Tamsui Fisherman's Wharf"
    },
    {
        id : 3,
        img: "./imgs/tamsui.jpg",
        info: "Alley, Tamsui old street"
    },
    {
        id : 4,
        img: "./imgs/zoo_inside.jpg",
        info: "Inside the zoo,Muzha Zoo"
    },
]

const img = document.querySelector('#memory-img');
const info = document.querySelector('#memory-info');

const preBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

let currentItem = 0;

window.addEventListener('DOMContentLoaded', () => {
    const item = memory[currentItem];
    img.src = item.img;
    info.textContent = item.info;
})

function showMemory(currentMemory) {
    const item = memory[currentMemory];
    img.src = item.img;
    info.textContent = item.info;
}

preBtn.addEventListener('click', () => {
    currentItem--;
    if (currentItem < 0) {
        currentItem = memory.length - 1;
    }
    showMemory(currentItem);
})

nextBtn.addEventListener('click', () => {
    currentItem++;
    if (currentItem > memory.length - 1) {
        currentItem = 0;
    }
    showMemory(currentItem);
})