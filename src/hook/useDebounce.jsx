import React, { useEffect, useState } from "react";

export const useDebounce = (input, delay = 500) => {
  const [debounceVal, setDebounceVal] = useState(input);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebounceVal(input);
    }, delay);

    return () => clearTimeout(timer);
  }, [input, delay]);

  return debounceVal;
};
