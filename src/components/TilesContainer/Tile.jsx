/* eslint-disable react/prop-types */

import { useEffect, useRef } from "react";
import {
  DECREASE_WORD,
  INCREASE_WORD,
  TILEINDEX,
  REDUCE_TILEINDEX,
} from "../../constants/constant";

const Tile = ({ listIndex, tileIndex, state }) => {
  const inputRef = useRef();
  const isEqual =
    listIndex === state.listIndex && tileIndex === state.tileIndex;

  const changeHandler = (e) => {
    const numberType = Number(e.target.value);
    if (numberType) return (e.target.value = "");
    e.target.value = e.target.value.slice(0, 1);
    // e.target.style.setProperty("--color", "#ed2");
    // console.dir(e.target);
  };

  const keyDownHandler = (e) => {
    if (e.key === "Backspace" && isEqual) {
      e.preventDefault();
    }
  };

  const keyUpHandler = (e) => {
    if (e.key === "Backspace" && isEqual) {
      e.preventDefault();
      inputRef.current.value.length === 1
        ? (inputRef.current.value = "")
        : state.updateIndex({
            type: REDUCE_TILEINDEX,
            value: state.tileIndex,
          });

      state.updateWord({
        type: DECREASE_WORD,
        userWord: state.userWord,
        index: tileIndex,
      });
    }

    if (e.keyCode >= 65 && e.keyCode <= 90) {
      const updatedIndex = state.tileIndex + 1 > 5 ? 5 : state.tileIndex + 1;

      state.updateIndex({ type: TILEINDEX, value: updatedIndex });
      state.updateWord({
        type: INCREASE_WORD,
        value: e.target.value,
        userWord: state.userWord,
        index: tileIndex,
      });
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", () => {
      // incase focus is lost.. auto-focus when any key is clicked
      if (isEqual) {
        inputRef.current.focus();
      }
    });

    if (isEqual) {
      inputRef.current.focus();
    }
  }, [isEqual]);
  return (
    <input
      type="text"
      ref={inputRef}
      onChange={changeHandler}
      onKeyUp={keyUpHandler}
      onKeyDown={keyDownHandler}
      disabled={!isEqual}
      className="h-[3.25rem] w-[3.25rem] border-[2px] text-center text-[2rem] font-inter font uppercase font-[700]"
    />
  );
};
export default Tile;
