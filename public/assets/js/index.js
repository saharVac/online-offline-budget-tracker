// DEPENDENCIES
import { populateTotal, populateTable, populateChart } from "./domMethods"
import { sendTransaction } from"./API"
import { useIndexedDb } from "./indexedDb"
let transactions = [];
let myChart;

function renderTransactions() {
  // TODO: define
}

fetch("/api/transaction")
  .then(response => {
    return response.json();
  })
  .then(data => {
    // save db data on global variable
    transactions = data;

    populateTotal(transactions);
    populateTable(transactions);
    populateChart(transactions, myChart);
  })
  .catch((err) => {
    useIndexedDb("balance", "balanceStore", "get", transactions)
  });


document.querySelector("#add-btn").onclick = function() {
  sendTransaction(true, transactions, myChart);
};

document.querySelector("#sub-btn").onclick = function() {
  sendTransaction(false, transactions, myChart);
};
