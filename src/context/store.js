import { createContext, useReducer } from "react";
import Reducer from "./reducer";

const INITIAL_STATE = {
  s_modal: false,
};

export const AllContext = createContext(INITIAL_STATE);

export const AllProvider = ({ children }) => {
  const [statements, xDispatch] = useReducer(Reducer, INITIAL_STATE);
  return (
    <AllContext.Provider
      value={{
        statements,
        xDispatch,
      }}
    >
      {children}
    </AllContext.Provider>
  );
};
