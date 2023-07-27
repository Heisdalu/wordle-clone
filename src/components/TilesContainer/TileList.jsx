/* eslint-disable react/prop-types */
import { useEffect, useRef } from "react";
import Tile from "./Tile";

const TileList = ({ listIndex, state, wordNotValid }) => {
  const arr = Array(5).fill(0);
  const listRef = useRef();

  const wordNotValidClass =
    listIndex === state.listIndex && wordNotValid.includes("ERROR_PRESENT");

  const tiles = arr.map((el, i) => (
    <Tile
      key={i + `${el}`}
      tileIndex={i + 1}
      listIndex={listIndex}
      state={state}
    />
  ));

  useEffect(() => {
    if (wordNotValidClass) {
      listRef.current.classList.add("moveLeftRight");
    }
    let removeTimeOut;

    removeTimeOut = () => {
      setTimeout(() => {
        listRef.current?.classList?.remove("moveLeftRight");
      }, 800);
    };

    removeTimeOut();

    return clearTimeout(removeTimeOut);
  }, [wordNotValid, wordNotValidClass]);

  return (
    <div
      ref={listRef}
      className={`max-w-[300px] flex mx-auto space-x-[5px] my-[5px] `}
    >
      {tiles}
    </div>
  );
};
export default TileList;
