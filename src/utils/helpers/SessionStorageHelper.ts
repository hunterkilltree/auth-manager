// The session storage utility works similarly to local storage, but data is cleared when the page session ends.
export function setSessionStorageItem(key: string, value: object) {
  sessionStorage.setItem(key, JSON.stringify(value));
}

export function getSessionStorageItem<T>(key: string): T | null {
  const item = sessionStorage.getItem(key);
  return item ? (JSON.parse(item) as T) : null;
}

export function removeSessionStorageItem(key: string) {
  sessionStorage.removeItem(key);
}
