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
      tileIndex: action.value,
    };
  }

  if (action.type === consts.REDUCE_TILEINDEX) {
    return {
      ...state,
      tileIndex: state.tileIndex <= 1 ? 1 : state.tileIndex - 1,
    };
  }

  if (action.type === consts.RESETINDEX) {
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
        };
    }
    if (action.type === consts.DECREASE_WORD) {
    return {
      ...state,
      userWord: action.value
    };
  }

  return state;
};
