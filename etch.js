let gridSize = 16;

const grid = document.querySelector('#grid');

for (let i = 0; i < gridSize; i++) {
    for (let j = 0; j < gridSize; j++) {
        const div = document.createElement('div');
        div.classList.add("cell");
        grid.appendChild(div);
    }
}

const cells = document.querySelectorAll('.cell');

cells.forEach((cell) => {

    cell.addEventListener('mouseover', cellToBlack);
});

const reset = document.querySelector('#clearGrid')

reset.addEventListener('click', () => {
    clearGrid(cells);
    gridSize = prompt("Select size of new grid. Maximum 100.")
    // alert grid size function
});



// New function for alert on grid size - plug into the click event




function cellToBlack() {
    this.style.backgroundColor = "black";
}

function clearGrid(cells) {
    cells.forEach((cell) => {
        cell.style.backgroundColor = "white";
    })
}