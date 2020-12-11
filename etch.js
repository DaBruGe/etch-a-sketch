const grid = document.querySelector('#grid');

for (let i = 0; i < 16; i++) {
    for (let j = 0; j < 16; j++) {
        const div = document.createElement('div');
        div.classList.add("cell");
        grid.appendChild(div);
    }
}

const cells = document.querySelectorAll('.cell');

cells.forEach((cell) => {

    cell.addEventListener('mouseover', cellToBlack);
});

function cellToBlack() {
    this.style.backgroundColor = "black";
}