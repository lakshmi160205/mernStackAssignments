// Bank Transaction Analyzer
const transactions = [
  { id: 1, type: "credit", amount: 5000 },
  { id: 2, type: "debit", amount: 2000 },
  { id: 3, type: "credit", amount: 10000 },
  { id: 4, type: "debit", amount: 3000 }
];

// 1. Credit transactions
const creditTransactions = transactions.filter(t => t.type === "credit");

// 2. Extract amounts
const amounts = transactions.map(t => t.amount);

// 3. Final balance
const finalBalance = transactions.reduce((balance, t) => {
  return t.type === "credit"
    ? balance + t.amount
    : balance - t.amount;
}, 0);

// 4. First debit transaction
const firstDebit = transactions.find(t => t.type === "debit");

// 5. Index of amount 10000
const index10000 = transactions.findIndex(t => t.amount === 10000);

console.log(creditTransactions, amounts, finalBalance, firstDebit, index10000);