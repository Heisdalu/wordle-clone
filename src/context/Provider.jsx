import Context from "./Context";
import { useReducer } from "react";
import * as consts from "../constants/constant";
import { dataReducer } from "../lib/Reducer";
import { dataFunc, saveData } from "../constants/helper";

const intial = {
  currentDate: +new Date(),
  success: false,
  unique: null,
  listIndex: 1,
  tileIndex: 1,
  userWord: [],
  allUserInputWord: consts.RESULT_OBJ,
  updateIndex: () => {},
  increaseListIndex: () => {},
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
      // console.log(allUserInputArr, allUserInputArr[obj.index - 1]);
      allUserInputArr[obj.listIndex - 1].wordInputted = word.join("");
      console.log(allUserInputArr);
      dispatch({
        type: consts.INCREASE_WORD,
        value: word,
        allWordValue: allUserInputArr,
      });
    }

    if (consts.DECREASE_WORD === obj.type) {
      word[obj.index - 1] = "";
      allUserInputArr[obj.listIndex - 1].wordInputted = word.join("");

      dispatch({
        type: consts.DECREASE_WORD,
        value: word,
        allWordValue: allUserInputArr,
      });
    }
  };

  const increaseListIndex = () => {
    dispatch({ type: consts.RESETINDEX });
  };

  const updateUnique = (value) => {
    dispatch({ type: consts.UPDATE_UNIQUE, value: value });
  };

  const checkWordisValidState = (obj) => {
    const allObj = [...obj.allUserInputWord];
    allObj[obj.listIndex - 1].state = obj.colorState;
    allObj[obj.listIndex - 1].filled = true;
    dispatch({
      type: consts.UPDATEVALID_WORD_STATE,
      value: allObj,
      success: obj.success,
    });
  };

  const contextState = {
    ...dataState,
    updateIndex,
    increaseListIndex,
    updateWord,
    updateUnique,
    checkWordisValidState,
  };
  //   console.log(contextState);

  local ? saveData(dataState) : saveData(intial);

  return <Context.Provider value={contextState}>{children}</Context.Provider>;
};
