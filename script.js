
// Create a 16 x 16 grid

let gridContainer = document.querySelector("#container");

for (let i = 0; i <= 255; i++) {
    const square = document.createElement("div");
    square.id = "square";
    gridContainer.appendChild(square)
    
    square.addEventListener('mouseover', function () {
        square.style.backgroundColor = 'red';
    });
}



