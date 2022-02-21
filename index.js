function checkCashRegister(price, cash, cid) {
  const UNIT_AMOUNT = {
    PENNY: 0.01,
    NICKEL: 0.05,
    DIME: 0.1,
    QUARTER: 0.25,
    ONE: 1.0,
    FIVE: 5.0,
    TEN: 10.0,
    TWENTY: 20.0,
    "ONE HUNDRED": 100.0,
  };

  let change = cash - price;
  let changeArray = [];
  let totalCID = 0;
  for (let element of cid) {
    totalCID += element[1];
  }
  totalCID = totalCID.toFixed(2);
  if (change > totalCID) {
    return { status: "INSUFFICIENT_FUNDS", change: changeArray };
  } else if (change.toFixed(2) === totalCID) {
    return { status: "CLOSED", change: cid };
  }
  cid = cid.reverse();
  for (let elem of cid) {
    let temp = [elem[0], 0];
    while (change >= UNIT_AMOUNT[elem[0]] && elem[1] > 0) {
      temp[1] += UNIT_AMOUNT[elem[0]];
      elem[1] -= UNIT_AMOUNT[elem[0]];
      change -= UNIT_AMOUNT[elem[0]];
      change = change.toFixed(2);
    }
    if (temp[1] > 0) {
      changeArray.push(temp);
    }
  }
  if (change > 0) {
    return { status: "INSUFFICIENT_FUNDS", change: [] };
  }
  return { status: "OPEN", change: changeArray };
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
