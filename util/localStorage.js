export function getLocalStorage(key) {
  try {
    return JSON.parse(window.localStorage[key]);
  } catch (err) {
    return undefined;
  }
}

export function setLocalStorage(key, newValue) {
  if (typeof window !== 'undefined') {
    window.localStorage.setItem(key, JSON.stringify(newValue));
  }
}
