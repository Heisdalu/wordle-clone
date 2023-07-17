import Context from "./Context";
import { useReducer } from "react";
import * as consts from "../constants/constant";
import { dataReducer } from "../lib/Reducer";
import { dataFunc, saveData } from "../constants/helper";

const intial = {
  currentDate: +new Date(),
  listIndex: 1,
  tileIndex: 1,
  userWord: [],
  allUserInputWord: [],
  updateIndex: () => {},
  resetIndex: () => {},
  updateWord: () => {},
};

// eslint-disable-next-line react/prop-types
export const ContextProvider = ({ children }) => {
  const local = localStorage.getItem(consts.WORLDE);
  const initialDate = local ? dataFunc(local) : intial;

  //   console.log(!!local, initialDate);

  const [dataState, dispatch] = useReducer(dataReducer, initialDate);

  const updateIndex = (obj) => {
    dispatch(obj);
  };

  const updateWord = (obj) => {
    const allUserInputArr = [...obj.allUserInputWord];
    const word = [...obj.userWord];
    if (consts.INCREASE_WORD === obj.type) {
      word[obj.index - 1] = obj.value;
      //   console.log(obj.listIndex);
      allUserInputArr[obj.listIndex - 1] = word.join("");
      console.log(allUserInputArr);
      dispatch({
        type: consts.INCREASE_WORD,
        value: word,
        allWordValue: allUserInputArr,
      });
    }

    if (consts.DECREASE_WORD === obj.type) {
      word[obj.index - 1] = "";
      allUserInputArr[obj.listIndex - 1] = word.join("");

      dispatch({
        type: consts.DECREASE_WORD,
        value: word,
        allWordValue: allUserInputArr,
      });
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
  //   console.log(contextState);

  local ? saveData(dataState) : saveData(intial);

  return <Context.Provider value={contextState}>{children}</Context.Provider>;
};
