// DEPENDENCIES
import { populateTotal, populateTable, populateChart } from "./domMethods"
import { sendTransaction } from"./API"
import { useIndexedDb, checkForIndexedDb } from "./indexedDb"
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

// TODO: change
function checkDatabase() {
  // open a transaction on your pending db
  const transaction = db.transaction(["balance"], "readwrite");
  // access your pending object store
  const store = transaction.objectStore("pending");
  // get all records from store and set to a variable
  const getAll = store.getAll();

  getAll.onsuccess = function() {
    if (getAll.result.length > 0) {
      fetch("/api/transaction/bulk", {
        method: "POST",
        body: JSON.stringify(getAll.result),
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json"
        }
      })
      .then(response => response.json())
      .then(() => {
        // if successful, open a transaction on your pending db
        const transaction = db.transaction(["pending"], "readwrite");

        // access your pending object store
        const store = transaction.objectStore("pending");

        // clear all items in your store
        store.clear();
      });
    }
  };
}

// listen for app coming back online
window.addEventListener("online", checkDatabase);