import PropTypes from "prop-types";
import { createContext, useContext, useReducer } from "react";
import { reducer, initialState } from "./activePostReducer";

const activePost = createContext();

export default function ActivePostContext({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <activePost.Provider value={{ state, dispatch }}>
      {children}
    </activePost.Provider>
  );
}

ActivePostContext.propTypes = {
  children: PropTypes.node.isRequired,
};

export function usePostContext() {
  const context = useContext(activePost);
  if (!context) throw new Error("You can't use context here");
  return context;
}
