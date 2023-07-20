export const LISTINDEX = "LISTINDEX";
export const TILEINDEX = "TILEINDEX";
export const REDUCE_TILEINDEX = "REDUCE_TILEINDEX";
export const REDUCE_LISTINDEX = "REDUCE_LISTINDEX";
export const INCTREASE_LISTINDEX = "INCTREASE_LISTINDEX";
export const INCREASE_WORD = "INCREASE_WORD";
export const DECREASE_WORD = "DECREASE_WORD";
export const UPDATE_UNIQUE = "UPDATE_UNIQUE";
export const UPDATEVALID_WORD_STATE = "UPDATEVALID_WORD_STATE";
export const WORLDE = "WORDLE";
export const RESULT_OBJ = Array(6)
  .fill({
    filled: false,
    wordInputted: "",
    state: "",
  })
  .map(() => ({
    filled: false,
    wordInputted: "",
    state: "",
  }));
