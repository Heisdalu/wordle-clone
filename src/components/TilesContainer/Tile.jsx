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
  const lastElem = state.allUserInputWord[5];
  const isEqual =
    listIndex === state.listIndex && tileIndex === state.tileIndex;

  const disabled = isEqual && !state.success && !lastElem.filled ? false : true;

  const changeHandler = (e) => {
    const numberType = Number(e.target.value);
    if (numberType) return (e.target.value = "");
    e.target.value = e.target.value.slice(0, 1);
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
      // console.log(e);
      state.updateIndex({ type: TILEINDEX, value: state.tileIndex });
      state.updateWord({
        type: INCREASE_WORD,
        value: e.key,
        userWord: state.userWord,
        allUserInputWord: state.allUserInputWord,
        index: tileIndex,
        listIndex: listIndex,
      });
    }
  };

  // check if the last is filled in order to disabled all input

  useEffect(() => {
    inputRef.current.style.setProperty("--delay", `${tileIndex * 0.5}s`);
    window.addEventListener("keydown", () => {
      // incase focus is lost.. auto-focus when any key is clicked
      if (isEqual && !state.success) {
        inputRef.current?.focus();
      }
    });

    if (isEqual && !state.success && !lastElem.filled) {
      inputRef.current?.focus();
    }
  }, [isEqual, lastElem.filled, state.success, tileIndex]);

  useEffect(() => {
    // auto-fill previous answers
    const validObj = [...state.allUserInputWord][listIndex - 1];

    if (validObj.filled) {
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

  useEffect(() => {
    const handleClick = (e) => {
      const datasetValue = e.target.closest(".Del");
      const del = datasetValue?.dataset?.value;
      if (isEqual && datasetValue && del === "Del") {
        if (!state.success === false || !lastElem.filled === false) return;

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
    };

    window.addEventListener("click", handleClick);

    return () => window.removeEventListener("click", handleClick);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isEqual, listIndex, state, tileIndex]);

  // disabled ? "#efefef4d" : "#000";

  return (
    <input
      type="text"
      aria-label="Editable Input Field"
      readOnly={true}
      ref={inputRef}
      onChange={changeHandler}
      onKeyUp={keyUpHandler}
      onKeyDown={keyDownHandler}
      disabled={isEqual && !state.success && !lastElem.filled ? false : true}
      className={`
      } h-[3.25rem] w-[3.25rem] border-[2px] text-center text-[2rem] text-blacked font-inter font uppercase font-[700] ${
        disabled ? "bg-blackDis" : "bg-whiteDis"
      }`}
    />
  );
};
export default Tile;
