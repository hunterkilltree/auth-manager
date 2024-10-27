const LocalStorageHelper = {
  setLocalStorageItem(key: string, value: object | string) {
    localStorage.setItem(key, JSON.stringify(value));
  },

  getLocalStorageItem<T>(key: string): T | null {
    const item = localStorage.getItem(key);
    return item ? (JSON.parse(item) as T) : null;
  },

  removeLocalStorageItem(key: string) {
    localStorage.removeItem(key);
  },
};

export default LocalStorageHelper;
