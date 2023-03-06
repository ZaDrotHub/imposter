
let numRows = prompt("Введіть кількість рядків:");
let numCols = prompt("Введіть кількість стовпців:");

let arr = [];
for (let i = 0; i < numRows; i++) {
  arr[i] = [];
  for (let j = 0; j < numCols; j++) {
    arr[i][j] = Math.floor(Math.random() * (100 - 10 + 1) + 10);
  }
}
console.log(arr);

let maxRow = 0;
let maxSum = 0;
for (let i = 0; i < numRows; i++) {
  let rowSum = 0;
  for (let j = 0; j < numCols; j++) {
    rowSum += arr[i][j];
  }
  if (rowSum > maxSum) {
    maxSum = rowSum;
    maxRow = i;
  }
}

console.log(`Рядок з максимальною сумою елементів: ${maxRow+1}`);
console.log("Суми елементів у кожному рядку:");
for (let i = 0; i < numRows; i++) {
  let rowSum = 0;
  for (let j = 0; j < numCols; j++) {
    rowSum += arr[i][j];
  }
  console.log(`Рядок ${i+1}: ${rowSum}`);
}

console.log("Суми елементів у кожному стовпці:");
for (let j = 0; j < numCols; j++) {
  let colSum = 0;
  for (let i = 0; i < numRows; i++) {
    colSum += arr[i][j];
  }
  console.log(`Стовпець ${j+1}: ${colSum}`);
}
