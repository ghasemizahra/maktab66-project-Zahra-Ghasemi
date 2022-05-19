import { useState } from "react";

const useLocalStorage = (key, initialValue = "") => {
  const [storedValue, setValue] = useState(() => {
    const item =
      typeof window !== "undefined" ? window.localStorage.getItem(key) : null;

    return item
      ? JSON.parse(item)
      : window.localStorage.setItem(key, JSON.stringify(initialValue));
  });

  const setStoredValue = (value) => {
    setValue(value);
    if (typeof window !== "undefined") {
      window.localStorage.setItem(key, JSON.stringify(value));
    }
  };

  return [storedValue, setStoredValue];
};

export { useLocalStorage };
