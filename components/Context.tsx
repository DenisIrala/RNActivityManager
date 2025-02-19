import { ThemeContext } from "@react-navigation/native";
import { createContext, useState } from "react";

interface MyContextValue {
  text: string;
  setText: React.Dispatch<React.SetStateAction<string>>;
}

const context = createContext<MyContextValue>({
  text: "Initial Value", // Initial value
  setText: () => {}, // Placeholder (will be overwritten by the Provider)
});

function Provider({ children }: { children: React.ReactNode }) {
  const [text, setText] = useState("");

  return (
    <context.Provider value={{ text, setText }}>
      {children}
    </context.Provider>
  );
}

export {context, Provider};
  