let gridSize = 16;

generateGrid(gridSize);

const cells = document.querySelectorAll('.cell');

cells.forEach((cell) => {

    cell.addEventListener('mouseover', cellToBlack);
});

const reset = document.querySelector('#clearGrid')

reset.addEventListener('click', () => {
    clearGrid(cells);
    gridSize = prompt("Select size of new grid. Maximum 100.")
    generateGrid(gridSize);
});




function cellToBlack() {
    this.style.backgroundColor = "black";
}

function clearGrid(cells) {
    cells.forEach((cell) => {
        cell.remove();
    })
}

function generateGrid(gridSize) {
    const grid = document.querySelector('#grid');
    grid.style.setProperty('--grid-rows', gridSize);
    grid.style.setProperty('--grid-cols', gridSize);

    for (let i = 0; i < gridSize; i++) {
        for (let j = 0; j < gridSize; j++) {
            const div = document.createElement('div');
            div.classList.add("cell");
            grid.appendChild(div);
        }
    }
}