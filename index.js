let countEl = document.getElementById("count-el");
let saveEl = document.getElementById("save-el");
let totalEl = document.getElementById("total-el");
let count = 0;

function increment() {
  count += 1;
  countEl.textContent = count;
}

function save() {
  let savedEntries = count + " - ";
  saveEl.textContent += savedEntries;
  // function array() {
  //   let arrayOfTotalPassengers = [];
  //   arrayOfTotalPassengers += arrayOfTotalPassengers.unshift(count);
  //   console.log(arrayOfTotalPassengers);
  //   let sum = 0;
  //   for (let i = 0; i < arrayOfTotalPassengers.length; i++) {
  //     sum += arrayOfTotalPassengers[i];
  //     totalEl.textContent += sum;
  //     return sum;
  //   }
  //   sumArray();
  // }
  // array(count);
  countEl.textContent = 0;
  count = 0;
}
