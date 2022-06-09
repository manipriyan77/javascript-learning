// tip calculator

const tipCalc = (bill) => {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};

const bills = [125, 555, 44];
const tips = [tipCalc(bills[0]), tipCalc(bills[1]), tipCalc(bills[2])];

const totalBill = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

console.log(bills, tips, totalBill);
