function setStorage(key, value) {
  return localStorage.setItem(key, value);
}

function getStorage(key) {
  return localStorage.getItem(key);
}

function removeStorage(key) {
  return localStorage.removeItem(key);
}

function clearStorage(key, value) {
  return localStorage.clear();
}

export {setStorage,getStorage,removeStorage,clearStorage}