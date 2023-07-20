/* eslint-disable react/prop-types */
import Tile from "./Tile";

const TileList = ({ listIndex, state, wordNotValid }) => {
  const arr = Array(5).fill(0);
  const wordNotValidClass =
    listIndex === state.listIndex && wordNotValid === "ERROR_PRESENT";

  const tiles = arr.map((el, i) => (
    <Tile
      key={i + `${el}`}
      tileIndex={i + 1}
      listIndex={listIndex}
      state={state}
    />
  ));

  return (
    <div
      className={`${
        // eslint-disable-next-line react/prop-types
        wordNotValidClass ? "moveLeftRight" : ""
      } max-w-[300px] flex mx-auto space-x-[5px] my-[5px] `}
    >
      {tiles}
    </div>
  );
};
export default TileList;
