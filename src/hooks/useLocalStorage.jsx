import React from "react";

export const useLocalStorage = () => {
  const getLocalStorage = (key) => {
    return JSON.parse(localStorage.getItem(key));
  };

  const setLocalStorage = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
    return;
  };

  return { getLocalStorage, setLocalStorage };
};
