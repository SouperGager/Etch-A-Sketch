const container = document.querySelector(".container");
const colorPicker = document.querySelector(".colorPicker");
const button = document.querySelector(".value");
const medium = document.querySelector(".medium");
const large = document.querySelector(".large");
const bigboi = document.querySelector(".bigboi");
let color = "#ee6363";
let gridSize = 16;
console.log(colorPicker)

button.addEventListener('click', function () {
    clearGrid();
    gridSize = 8;
    createGrid();
});

medium.addEventListener('click', function () {
    clearGrid();
    gridSize = 16;
    createGrid();
});

large.addEventListener('click', function () {
    clearGrid();
    gridSize = 32;
    createGrid();
});

bigboi.addEventListener('click', function () {
    clearGrid();
    gridSize = 64;
    createGrid();
});

function createGrid() {
    for (let i = 0; i < gridSize * gridSize; i++) {
        const grids = document.createElement("div");
        grids.classList.add("grids");
        container.appendChild(grids);
    }
    container.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;
}


function clearGrid() {
    container.innerHTML = ''
}

container.addEventListener('mouseover', (e) => {
    const cell = e.target;
    if (cell.classList.contains('grids')) {
        cell.style.backgroundColor = color;
    }
});

colorPicker.addEventListener('input', (e) => {
    color = e.target.value;

})
const logo = document.getElementById('logo');
logo.addEventListener('click', () => {
    window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley', '_blank')
});



createGrid();



