// DEPENDENCIES
import { populateTotal, populateTable, populateChart } from "./domMethods"
import { sendTransaction } from"./API"
import { useIndexedDb, checkForIndexedDb, checkDatabase } from "./indexedDb"
let transactions = [];
let myChart;

function renderTransactions(transactions, myChart) {
  populateTotal(transactions);
  populateTable(transactions);
  populateChart(transactions, myChart);
}

fetch("/api/transaction")
  .then(response => {
    return response.json();
  })
  .then(data => {
    // save db data on global variable
    transactions = data;

    renderTransactions(transactions, myChart)
  })

// check for indexedDb objects to render onto page
if (checkForIndexedDb()) {
  useIndexedDb("balance", "balanceStore", "get", transactions).then(response => {
    // renderTransactions(response, myChart);
  });
}

document.querySelector("#add-btn").onclick = function() {
  sendTransaction(true, transactions, myChart);
};

document.querySelector("#sub-btn").onclick = function() {
  sendTransaction(false, transactions, myChart);
};

// listen for app coming back online
window.addEventListener("online", checkDatabase);