// tip calculator

let bill = 275

let tip = bill >= 50 && bill <= 300 ? bill*0.15: bill*0.2
console.log(`the bill was ${bill}, the tip was ${tip},and the total bill was ${tip+bill}`)