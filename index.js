const container = document.querySelector('.container');
const button = document.getElementById('reset-button');

function createGrid(squaresPerSide) {
    container.innerHTML = ''; // Clear the container
    const squareSize = 960 / squaresPerSide; // Corrected variable name

    for (let i = 0; i < squaresPerSide * squaresPerSide; i++) {
        const square = document.createElement('div');
        square.classList.add('grid-square');
        square.style.width = `${squareSize}px`;
        square.style.height = `${squareSize}px`;
        container.appendChild(square);
    }
}

button.addEventListener('click', () => {
    let squaresPerSide;

    // Prompt the user for the number of squares per side
    do {
        squaresPerSide = parseInt(prompt('Enter the number of squares per side (maximum 100):'));
    } while (isNaN(squaresPerSide) || squaresPerSide < 1 || squaresPerSide > 100);

    // Create a new grid with the specified number of squares per side
    createGrid(squaresPerSide);
});

// Create the initial 16x16 grid
createGrid(16);
