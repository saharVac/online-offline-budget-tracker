// function checking if indexedDb is supported by the browser
export function checkForIndexedDb() {
    window.indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;
    window.IDBTransaction = window.IDBTransaction || window.webkitIDBTransaction || window.msIDBTransaction;
    window.IDBKeyRange = window.IDBKeyRange || window.webkitIDBKeyRange || window.msIDBKeyRange;

    if (!window.indexedDB) {
        console.log("Your browser doesn't support a stable version of IndexedDB.");
        return false;
    }
    return true;
}

// set up the database
export function useIndexedDb(databaseName, method, object) {
    return new Promise((resolve, reject) => {
        const request = window.indexedDB.open(databaseName, 1);
        let db,
            transaction,
            store;
    
        request.onupgradeneeded = function(e) {
            const db = request.result;
            db.createObjectStore(storeName, { autoIncrement: true });
        };
    
        request.onerror = function(e) {
            console.log("There was an error");
        };
    
        request.onsuccess = function(e) {
            db = request.result;
            transaction = db.transaction(databaseName, "readwrite");
            store = transaction.objectStore(databaseName);
    
            db.onerror = function(e) {
                console.log("error");
            };
            if (method === "put") {
                store.put(object);
            } else if (method === "get") {
                const all = store.getAll();
                all.onsuccess = function() {
                    resolve(all.result);
                };
            } else if (method === "delete") {
                store.delete(object._id);
            }
            transaction.oncomplete = function() {
                db.close();
            };
        };
    });
}

function checkDatabase() {
    // open a transaction on your pending db
    const transaction = db.transaction(["balanceStore"], "readwrite");
    // access your pending object store
    const balanceStore = transaction.objectStore("pending");
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
