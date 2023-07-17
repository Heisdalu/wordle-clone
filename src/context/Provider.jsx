import Context from "./Context";
import { useReducer } from "react";
import * as consts from "../constants/constant";
import { dataReducer } from "../lib/Reducer";

const intial = {
  listIndex: 1,
  tileIndex: 1,
  userWord: [],
  updateIndex: () => {},
  resetIndex: () => {},
  updateWord: () => {},
};

// eslint-disable-next-line react/prop-types
export const ContextProvider = ({ children }) => {
  const [dataState, dispatch] = useReducer(dataReducer, intial);

  const updateIndex = (obj) => {
    dispatch(obj);
  };

  const updateWord = (obj) => {
    const word = [...obj.userWord];
    if (consts.INCREASE_WORD === obj.type) {
      word[obj.index - 1] = obj.value;
      dispatch({ type: consts.INCREASE_WORD, value: word });
    }
    
    if (consts.DECREASE_WORD === obj.type) {
      word[obj.index - 1] = "";
      dispatch({ type: consts.DECREASE_WORD, value: word });
    }
  };

  const resetIndex = () => {
    dispatch({ type: consts.RESETINDEX });
  };

  const contextState = {
    ...dataState,
    updateIndex,
    resetIndex,
    updateWord,
  };

  return <Context.Provider value={contextState}>{children}</Context.Provider>;
};
