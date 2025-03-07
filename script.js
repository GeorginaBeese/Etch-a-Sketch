
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

    for (let i = 1; i <= (x*x); i++) {
        const square = document.createElement("div");
        square.id = "square";
        gridContainer.appendChild(square)
        square.addEventListener('mouseover', function () {
            square.style.backgroundColor = 'red';
        });
    } 
    const root = document.documentElement;
    const newWidth = `${100/x}%`
    root.style.setProperty('--div-width', newWidth);   
}

button.addEventListener('click', () => {
    const dimension = input.value;
    input.value = '';
    input.focus();
    createGrid(dimension)
})
