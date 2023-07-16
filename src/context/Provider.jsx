import Context from "./Context";
import { useReducer } from "react";
import { LISTINDEX, RESETINDEX, TILEINDEX } from "../constants/constant";

const intial = {
  listIndex: 1,
  tileIndex: 1,
  updateIndex: () => {},
  resetIndex: () => {},
};

const dataReducer = (state, action) => {
  if (action.type === LISTINDEX) {
    return {
      ...state,
      listIndex: action.value,
    };
  }

  if (action.type === TILEINDEX) {
    return {
      ...state,
      tileIndex: action.value,
    };
  }

  if (action.type === RESETINDEX) {
    return {
      ...state,
      listIndex: 1,
      tileIndex: 1,
    };
  }

  return state;
};

// eslint-disable-next-line react/prop-types
export const ContextProvider = ({ children }) => {
  const [dataState, dispatch] = useReducer(dataReducer, intial);

  const updateIndex = (obj) => {
    dispatch(obj);
  };

  const resetIndex = () => {
    dispatch({ type: RESETINDEX });
  };

  const contextState = {
    ...dataState,
    updateIndex,
    resetIndex,
  };

  return <Context.Provider value={contextState}>{children}</Context.Provider>;
};
