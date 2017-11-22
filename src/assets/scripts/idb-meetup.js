let IDB_NAME = 'meetups-store';
let IDB_STORE = 'meetups';

/**
 * Create and initialize the IDB
 * @type {Promise<DB>}
 */
let dbPromise = idb.open(IDB_NAME, 1, function(db) {
  if (!db.objectStoreNames.contains(IDB_STORE)) {
    db.createObjectStore(IDB_STORE, {
      keyPath: 'id'
    });
  }
});

function writeData(storeName, data) {
  return dbPromise
    .then(function(db) {
      let transaction = db.transaction(storeName, 'readwrite');
      let store = transaction.objectStore(storeName);
      store.put(data);

      console.info('[IDB 🗄] Data wrote successful!');
      return transaction.complete;
    })
}

function readAllData(storeName) {
  return dbPromise
    .then(function(db) {
      let transaction = db.transaction(storeName, 'readonly');
      let store = transaction.objectStore(storeName);

      console.info('[IDB 🗄] Data retrieved successful!');
      return store.getAll();
    })
}

function clearAllData(storeName) {
  return dbPromise
    .then(function(db) {
      let transaction = db.transaction(storeName, 'readwrite');
      let store = transaction.objectStore(storeName);
      store.clear();

      console.info('[IDB 🗄] Data removed successful!');
      return transaction.complete;
    })
}

