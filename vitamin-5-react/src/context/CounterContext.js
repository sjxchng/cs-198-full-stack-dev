import React, { createContext, useState } from "react";

// create the context
export const CounterContext = createContext();

// wrap the app with this provider to share the counter globally
export function CounterProvider({ children }) {
  const [count, setCount] = useState(0);

  const increase = () => setCount((c) => c + 1);
  const decrease = () => setCount((c) => c - 1);

  return (
    <CounterContext.Provider value={{ count, increase, decrease, setCount }}>
      {children}
    </CounterContext.Provider>
  );
}