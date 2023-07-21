import * as consts from "../constants/constant";

export const dataReducer = (state, action) => {
  if (action.type === consts.LISTINDEX) {
    return {
      ...state,
      listIndex: action.value,
    };
  }

  if (action.type === consts.TILEINDEX) {
    return {
      ...state,
      tileIndex: state.tileIndex + 1 > 5 ? 5 : state.tileIndex + 1,
    };
  }

  if (action.type === consts.REDUCE_TILEINDEX) {
    return {
      ...state,
      tileIndex: state.tileIndex <= 1 ? 1 : state.tileIndex - 1,
    };
  }

  if (action.type === consts.INCTREASE_LISTINDEX) {
    return {
      ...state,
      listIndex: 1,
      tileIndex: 1,
    };
  }

  if (action.type === consts.INCREASE_WORD) {
    return {
      ...state,
      userWord: action.value,
      allUserInputWord: action.allWordValue,
    };
  }
  if (action.type === consts.DECREASE_WORD) {
    return {
      ...state,
      userWord: action.value,
      allUserInputWord: action.allWordValue,
    };
  }

  if (action.type === consts.UPDATE_UNIQUE) {
    return {
      ...state,
      unique: action.value,
    };
  }
  if (action.type === consts.UPDATEVALID_WORD_STATE) {
    return {
      ...state,
      success: action.success,
      tileIndex: 1,
      userWord: [],
      listIndex: state.listIndex + 1 >= 6 ? 6 : state.listIndex + 1,
      allUserInputWord: action.value,
    };
  }

  return state;
};
