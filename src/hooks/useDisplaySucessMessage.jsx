import { useState } from "react";

export const useSucesMessage = () => {
  //state
  const [isAdded, setIsAdded] = useState(false);

  //comportement
  const displaySucessMessage = () => {
    setIsAdded(true);
    setTimeout(() => {
      setIsAdded(false);
    }, 200000);
  };

  return { isAdded, displaySucessMessage };
};
