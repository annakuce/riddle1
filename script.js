const grid = document.getElementById("grid");
const gridSize = 10; // Change for larger/smaller grids
let cursorX = 0;
let cursorY = 0;

// Create the grid
for (let y = 0; y < gridSize; y++) {
    for (let x = 0; x < gridSize; x++) {
        const cell = document.createElement("div");
        cell.classList.add("cell");
        cell.dataset.x = x;
        cell.dataset.y = y;
        grid.appendChild(cell);
    }
}

// Function to update the cursor position
function updateCursor() {
    document.querySelectorAll(".cell").forEach(cell => cell.classList.remove("cursor"));
    const cell = document.querySelector(`.cell[data-x="${cursorX}"][data-y="${cursorY}"]`);
    if (cell) {
        cell.classList.add("cursor");
    }
}

// Listen for keypresses
document.addEventListener("keydown", event => {
    if (event.key === "w") cursorY = Math.max(0, cursorY - 1); // Move up
    if (event.key === "s") cursorY = Math.min(gridSize - 1, cursorY + 1); // Move down
    if (event.key === "a") cursorX = Math.max(0, cursorX - 1); // Move left
    if (event.key === "d") cursorX = Math.min(gridSize - 1, cursorX + 1); // Move right

    // Press "Space" to fill the square
    if (event.key === " ") {
        const cell = document.querySelector(`.cell[data-x="${cursorX}"][data-y="${cursorY}"]`);
        if (cell) {
            cell.classList.add("filled");
        }
        event.preventDefault(); // Prevent scrolling when pressing space
    }

    updateCursor();
});

// Initialize cursor position
updateCursor();
