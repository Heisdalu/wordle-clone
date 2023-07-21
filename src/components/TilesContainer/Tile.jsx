/* eslint-disable react/prop-types */

import { useEffect, useRef } from "react";
import {
  DECREASE_WORD,
  INCREASE_WORD,
  TILEINDEX,
  REDUCE_TILEINDEX,
} from "../../constants/constant";
import { colorDetector } from "../../constants/helper";

const Tile = ({ listIndex, tileIndex, state }) => {
  const inputRef = useRef();
  const isEqual =
    listIndex === state.listIndex && tileIndex === state.tileIndex;

  // const animateClass = state.listIndex === listIndex;

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
    if (e.code === "Space" && isEqual) {
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
        listIndex: listIndex,
        allUserInputWord: state.allUserInputWord,
      });
    }

    if (e.keyCode >= 65 && e.keyCode <= 90) {
      // e.target.style.setProperty("--color", "#ed2");
      // e.target.style.setProperty("--delay", `${tileIndex * 0.5}s`);
      isEqual ? inputRef.current.classList.add("scaled") : "";

      state.updateIndex({ type: TILEINDEX, value: state.tileIndex });
      state.updateWord({
        type: INCREASE_WORD,
        value: e.target.value,
        userWord: state.userWord,
        allUserInputWord: state.allUserInputWord,
        index: tileIndex,
        listIndex: listIndex,
      });
    }
  };
  
  const lastElem = state.allUserInputWord[5];
  useEffect(() => {
    inputRef.current.classList.remove("scaled");
    inputRef.current.style.setProperty("--delay", `${tileIndex * 0.5}s`);
    window.addEventListener("keydown", () => {
      // incase focus is lost.. auto-focus when any key is clicked
      if (isEqual && !state.success) {
        inputRef.current.focus();
      }
    });

    if (isEqual && !state.success && !lastElem.filled) {
      inputRef.current.focus();
    }
  }, [isEqual, lastElem.filled, state.success, tileIndex]);

  useEffect(() => {
    // auto-fill previous answers
    const validObj = [...state.allUserInputWord][listIndex - 1];

    if (validObj.filled) {
      console.log(validObj, listIndex, tileIndex);
      inputRef.current.value = validObj.wordInputted[tileIndex - 1] || "";
      inputRef.current.style.setProperty(
        "--color",
        colorDetector(validObj.state[tileIndex - 1])
      );
      inputRef.current.classList.add("animate");
    }

    if (validObj.wordInputted.length >= 1) {
      inputRef.current.value = validObj.wordInputted[tileIndex - 1] || "";
    }
  }, [listIndex, state.allUserInputWord, tileIndex]);

  return (
    <input
      type="text"
      ref={inputRef}
      onChange={changeHandler}
      onKeyUp={keyUpHandler}
      onKeyDown={keyDownHandler}
      // disabled={!isEqual}
      disabled={isEqual && !state.success && !lastElem.filled ? false : true}
      className={`
      } h-[3.25rem] w-[3.25rem] border-[2px] text-center text-[2rem] font-inter font uppercase font-[700]`}
    />
  );
};
export default Tile;
