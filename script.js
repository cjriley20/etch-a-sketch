const grid = document.querySelector('div.grid');

const rows = 4;
const cols = rows;

for (let i = 0; i < rows; i++) {
  const row = document.createElement('div');
  row.classList.add('row');
  for (let j = 0; j < cols; j++) {
    const col = document.createElement('div');
    col.classList.add('column');
    row.appendChild(col);
  }
  grid.appendChild(row);
}