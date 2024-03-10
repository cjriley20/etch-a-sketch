function initializeGrid(rows, cols) {
  const grid = document.querySelector('div.grid');

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
          event.target.style.backgroundColor = 'black';
        }
      })

      row.appendChild(col);
    }
    grid.appendChild(row);
  }
}

const resetButton = document.querySelector(`#reset`);

resetButton.addEventListener('click', (event) => {
  const inputString = prompt('Enter number of squares per side (< 100):', '16');

  let rows = parseInt(inputString);
  rows = Math.min(rows, 100);
  rows = Math.max(rows, 1);

  initializeGrid(rows, rows);
})

initializeGrid(8, 8);