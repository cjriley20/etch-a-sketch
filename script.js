// Grid
const grid = document.querySelector('div.grid');

function initializeGrid(rows, cols) {
  // Clear grid first.
  while (grid.firstChild) {
    grid.removeChild(grid.firstChild);
  }

  for (let i = 0; i < rows; i++) {
    const row = document.createElement('div');
    row.classList.add('row');
    for (let j = 0; j < cols; j++) {
      const col = document.createElement('div');
      col.classList.add('column');

      col.addEventListener('mouseover', (event) => {
        if (event.buttons == 1) {
          event.target.style.backgroundColor = getColor();
        }
      })

      row.appendChild(col);
    }
    grid.appendChild(row);
  }
}

// Reset button
const resetButton = document.querySelector(`#reset`);

resetButton.addEventListener('click', (event) => {
  const inputString = prompt('Enter number of squares per side (< 100):', '16');

  let rows = parseInt(inputString);
  rows = Math.min(rows, 100);
  rows = Math.max(rows, 1);

  initializeGrid(rows, rows);
})

// Color buttons
const Colors = [
  'aqua',
  'black',
  'blue',
  'brown',
  'cyan',
  'gray',
  'green',
  'lawngreen',
  'lightblue',
  'maroon',
  'orange',
  'pink',
  'purple',
  'red',
  'yellow'
];

let selectedColor = 'black';

function getColor() {
  let color = selectedColor;

  if (selectedColor == 'random') {
    const index = Math.floor(Math.random() * Colors.length);
    color = Colors[index];
  }

  return color;
}

const colorButtons = document.querySelectorAll('input[name=color]');

for (const colorButton of colorButtons) {
  colorButton.addEventListener('change', (event) => {
    selectedColor = event.target.value;
  })
}

// Main
initializeGrid(16, 16);