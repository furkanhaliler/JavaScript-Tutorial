const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

const tipCalculator = function (bill) {
  if (50 < bill && bill < 300) {
    return (bill * 15) / 100;
  } else {
    return (bill * 20) / 100;
  }
};

bills.forEach((bill) => {
  const tip = tipCalculator(bill);
  tips.push(tip);
  totals.push(tip + bill);
});

/*for (let i = 0; i < bills.length; i++) {
  const tip = tipCalculator(bills[i]);
  tips.push(tip);
  totals.push(tip + bills[i]);
}*/

console.log(bills);
console.log(tips);
console.log(totals);

const calcAverage = function (arr) {
  let total = 0;

  arr.forEach((numb) => {
    total += numb;
  });

  const length = arr.length;
  const average = total / length;
  return average;
};

const averageOfBills = calcAverage(bills);
const averageOfTips = calcAverage(tips);
const averageOfTotals = calcAverage(totals);

console.log(averageOfBills);
console.log(averageOfTips);
console.log(averageOfTotals);
