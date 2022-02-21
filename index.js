// a function that checks for cash in the register
function checkCashRegister(price, cash, cid) {
  var change = cash - price;
  var cidArray = [];
  for (var i = 0; i < cid.length; i++) {
    cidArray.push(cid[i][1]);
  }

  var cidTotal = 0;

  for (var i = 0; i < cid.length; i++) {
    cidTotal += cid[i][1];
  }
  var currency = [
    ["ONE HUNDRED", 100.0],
    ["TWENTY", 20.0],
    ["TEN", 10.0],
    ["FIVE", 5.0],
    ["ONE", 1.0],
    ["QUARTER", 0.25],
    ["DIME", 0.1],
    ["NICKEL", 0.05],
    ["PENNY", 0.01],
  ];

  if (cidTotal < change) {
    return {
      status: "INSUFFICIENT_FUNDS",
      change: [],
    };
  }

  if (cidTotal === change) {
    return {
      status: "CLOSED",
      change,
    };
  } else {
    return {
      status: "OPEN",
      change: [],
    };
  }
}

checkCashRegister(19.5, 20, [
  ["PENNY", 1.01],
  ["NICKEL", 2.05],
  ["DIME", 3.1],
  ["QUARTER", 4.25],
  ["ONE", 90],
  ["FIVE", 55],
  ["TEN", 20],
  ["TWENTY", 60],
  ["ONE HUNDRED", 100],
]);

console.log(
  checkCashRegister(19.5, 20, [
    ["PENNY", 1.01],
    ["NICKEL", 2.05],
    ["DIME", 3.1],
    ["QUARTER", 4.25],
    ["ONE", 90],
    ["FIVE", 55],
    ["TEN", 20],
    ["TWENTY", 60],
    ["ONE HUNDRED", 100],
  ])
);
