
// Create a 16 x 16 grid

let gridContainer = document.querySelector("#container");
const input = document.querySelector('input');
const button = document.querySelector('button');

function createGrid(x) {

    // Removing any existing grid
    const square = document.querySelector("#square");
    if (square) {
        while (gridContainer.firstChild) {
            gridContainer.removeChild(gridContainer.firstChild);
          }
        }

    // Creating a new grid
    gridContainer.style.border = "2px solid #000000";
    for (let i = 1; i <= (x*x); i++) {
        const square = document.createElement("div");
        square.id = "square";
        gridContainer.appendChild(square);
    }

    const root = document.documentElement;
    const newWidth = `${100/x}%`
    root.style.setProperty('--div-width', newWidth); 

    gridSquares = document.querySelectorAll("#square")
    gridSquares.forEach(gridSquare => gridSquare.addEventListener('mouseover', colorGrid));
}


function colorGrid() {
    let currentOpacity = Number(this.style.backgroundColor.slice(-4, -1));

    if (currentOpacity <= 0.9) {
        this.style.backgroundColor = `rgba(225, 0, 0, ${currentOpacity + 0.1})`;
    }
    else if (this.style.backgroundColor == 'rgb(225, 0, 0)') {
    return;
    } 
    else {
    this.style.backgroundColor = 'rgba(225, 0, 0, 0.1)';  
    }
}

button.addEventListener('click', () => {
    const dimension = input.value;
    input.value = '';
    input.focus();
    createGrid(dimension)
})
