let gridSize = 16;
let fillMode = "black";
const grid = document.querySelector('#grid');

generateGrid(gridSize, fillMode);

const blackFill = document.querySelector('#blackFill')
blackFill.addEventListener('click', () => {
    fillMode = "black";
    cellListener(fillMode);
});

const rainbowFill = document.querySelector('#rainbowFill')
rainbowFill.addEventListener('click', () => {
    fillMode = "rainbow";
    cellListener(fillMode);
});

const greyscaleFill = document.querySelector('#greyscaleFill')
greyscaleFill.addEventListener('click', () => {
    fillMode = "greyscale";
    cellListener(fillMode);
});



const cells = document.querySelectorAll('.cell');

const reset = document.querySelector('#clearGrid')
reset.addEventListener('click', () => {
    clearGrid(cells);
    do {
        gridSize = prompt("Select size of new grid. Maximum 100.")
    } while (gridSize > 100);
    generateGrid(gridSize, fillMode);
});



function clearGrid(cells) {
    cells = document.querySelectorAll('.cell');
    cells.forEach((cell) => {
        cell.remove();
    })
}

function generateGrid(gridSize, fillMode) {
    
    grid.style.setProperty('--grid-rows', gridSize);
    grid.style.setProperty('--grid-cols', gridSize);

    for (let i = 0; i < (gridSize * gridSize); i++) {
        const div = document.createElement('div');
        div.classList.add("cell");
        grid.appendChild(div);
    }
    cellListener(fillMode);
}

function cellListener(fillMode) {
    const cells = document.querySelectorAll('.cell');

    cells.forEach((cell) => {
        cell.removeEventListener('mouseover', cellToBlack);
        cell.removeEventListener('mouseover', cellToRainbow);
        cell.removeEventListener('mouseover', cellToGreyscale);
    });
    
    cells.forEach((cell) => {
        if (fillMode === "black") {
            cell.addEventListener('mouseover', cellToBlack);
        } else if (fillMode === "rainbow") {
            cell.addEventListener('mouseover', cellToRainbow);
        } else if (fillMode === "greyscale") {
            cell.addEventListener('mouseover', cellToGreyscale);
        }
    });
}


function cellToBlack() {
    this.style.backgroundColor = "black";
}

function cellToRainbow() {
    let red = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);
    let col = "rgb(" + red + "," + green + "," + blue + ")";
    this.style.backgroundColor = col;
}

function cellToGreyscale() {
    let shade = this.style.opacity;
    if (shade < 1) {
        this.style.opacity = shade + 0.1;
    }
}