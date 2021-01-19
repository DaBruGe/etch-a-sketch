let gridSize = 16;
// Inital colour mode is black
// fillMode will dictate the current colour fill method
let fillMode = "black";
// Selects the div #grid which will contain all cells
const grid = document.querySelector('#grid');

generateGrid(gridSize, fillMode);

// Add listeners for colour change buttons
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

const whiteFill = document.querySelector('#whiteFill')
whiteFill.addEventListener('click', () => {
    fillMode = "white";
    cellListener(fillMode);
});


// Add event listener for clearing grid
const cells = document.querySelectorAll('.cell');
const reset = document.querySelector('#clearGrid')
reset.addEventListener('click', () => {
    clearGrid(cells);
    // Restricts user to keeping grid under 100x100
    do {
        gridSize = prompt("Select size of new grid. Maximum 100.")
    } while (gridSize > 100);
    // Generate new grid with new size
    generateGrid(gridSize, fillMode);
});


// Removes all cells previously generated
function clearGrid(cells) {
    cells = document.querySelectorAll('.cell');
    cells.forEach((cell) => {
        cell.remove();
    })
}

function generateGrid(gridSize, fillMode) {
    // Creates CSS variables for grid size to be used in formatting
    // rows and columns in CSS
    grid.style.setProperty('--grid-rows', gridSize);
    grid.style.setProperty('--grid-cols', gridSize);
    // Repeatedly generates cells until size is reached
    for (let i = 0; i < (gridSize * gridSize); i++) {
        const div = document.createElement('div');
        div.classList.add("cell");
        grid.appendChild(div);
    }
    cellListener(fillMode);
}

// Keeps track of response to any button clicks or movement over cells in grid
function cellListener(fillMode) {
    const cells = document.querySelectorAll('.cell');
    // Remove any current listeners from grid cells
    cells.forEach((cell) => {
        cell.removeEventListener('mouseover', cellToBlack);
        cell.removeEventListener('mouseover', cellToRainbow);
        cell.removeEventListener('mouseover', cellToGreyscale);
        cell.removeEventListener('mouseover', cellToWhite);
    });
    
    // Add new listener to grid cells dependant on current fill mode
    cells.forEach((cell) => {
        if (fillMode === "black") {
            cell.addEventListener('mouseover', cellToBlack);
        } else if (fillMode === "rainbow") {
            cell.addEventListener('mouseover', cellToRainbow);
        } else if (fillMode === "greyscale") {
            cell.addEventListener('mouseover', cellToGreyscale);
        } else if (fillMode === "white") {
            cell.addEventListener('mouseover', cellToWhite);
        }
    });
}

// Functions for colour changes

function cellToBlack() {
    this.style.backgroundColor = "black";
}

function cellToWhite() {
    this.style.backgroundColor = "white";
}

function cellToRainbow() {
    // Random number for each RGB value
    let red = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);
    // Checks and alters red value if matching green
    // Prevents all three RGB values being the same number
    if (red === green) {
        if (red === 0) {
            red += 1;
        } else {
            red -= 1;
        }
    }
    // Create RGB value string to set cell colour as
    let col = "rgb(" + red + "," + green + "," + blue + ")";
    this.style.backgroundColor = col;
}

function cellToGreyscale() {
    let rgb = this.style.backgroundColor;
    // Breaks up RGB values and stores in array "rgb"
    rgb = rgb.substring(4, rgb.length-1).replace(/ /g, '').split(',');

    // If cell is currently not in the greyscale sequence, sets to initial
    // value of 10% of black
    if (this.style.backgroundColor === "black" || 
        this.style.backgroundColor === "white" ||
        this.style.backgroundColor === undefined || 
        rgb[0] != rgb[1]) {
        this.style.backgroundColor = "rgb(229.5, 229.5, 229.5)";
    } else {
        // If already in greyscale sequence, takes 10% off each RGB value
        rgb[0] -= 25.5;
        rgb[1] -= 25.5;
        rgb[2] -= 25.5;
        this.style.backgroundColor =
            "rgb(" + rgb[0] + "," + rgb[1] + "," + rgb[2] + ")";
    }
}