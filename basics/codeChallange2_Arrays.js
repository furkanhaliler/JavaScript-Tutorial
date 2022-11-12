const tipCalculator = function (bill) {
  if (50 < bill && bill < 300) {
    return (bill * 15) / 100;
  } else {
    return (bill * 20) / 100;
  }
};

console.log(tipCalculator(100));

const bills = [125, 555, 44];

const tips = [
  tipCalculator(bills[0]),
  tipCalculator(bills[1]),
  tipCalculator(bills[2]),
];

const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

console.log(bills);
console.log(tips);
console.log(totals);
console.log((44 * 20) / 100);
