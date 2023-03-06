
let rows = parseInt(prompt('Введіть кількість рядків:'));
let cols = parseInt(prompt('Введіть кількість стовпців:'));


let arr = [];
for (let i = 0; i < rows; i++) {
  arr[i] = [];
  for (let j = 0; j < cols; j++) {
    arr[i][j] = prompt(`Введіть елемент для рядка ${i} та стовпця ${j}:`);
  }
}

console.log('Матриця:');
for (let i = 0; i < rows; i++) {
  console.log(arr[i].join('\t'));
}

let rowSum, colSum;
for (let i = 0; i < rows; i++) {
  rowSum = 0;
  for (let j = 0; j < cols; j++) {
    rowSum += parseInt(arr[i][j]);
  }
  console.log(`Сума елементів у рядку ${i}: ${rowSum}`);
}

for (let j = 0; j < cols; j++) {
  colSum = 0;
  for (let i = 0; i < rows; i++) {
    colSum += parseInt(arr[i][j]);
  }
  console.log(`Сума елементів у стовпці ${j}: ${colSum}`);
}
