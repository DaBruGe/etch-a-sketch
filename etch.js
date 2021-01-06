let gridSize = 16;
const grid = document.querySelector('#grid');

generateGrid(gridSize);

const cells = document.querySelectorAll('.cell');

cellListener();



const reset = document.querySelector('#clearGrid')

reset.addEventListener('click', () => {
    clearGrid(cells);
    do {
        gridSize = prompt("Select size of new grid. Maximum 100.")
    } while (gridSize > 100);
    generateGrid(gridSize);
});



function cellToBlack() {
    this.style.backgroundColor = "black";
}

function clearGrid(cells) {
    cells = document.querySelectorAll('.cell');
    cells.forEach((cell) => {
        cell.remove();
    })
}

function generateGrid(gridSize) {
    
    grid.style.setProperty('--grid-rows', gridSize);
    grid.style.setProperty('--grid-cols', gridSize);

    for (let i = 0; i < (gridSize * gridSize); i++) {
        const div = document.createElement('div');
        div.classList.add("cell");
        grid.appendChild(div);
    }
    cellListener();
}

function cellListener() {
    const cells = document.querySelectorAll('.cell');

    cells.forEach((cell) => {
    
        cell.addEventListener('mouseover', cellToBlack);
    });
}