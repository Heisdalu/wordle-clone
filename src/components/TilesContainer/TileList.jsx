import { useContext } from "react";
import Tile from "./Tile";
import Context from "../../context/Context";

// eslint-disable-next-line react/prop-types
const TileList = ({ listIndex }) => {
  const arr = Array(5).fill(0);
  const state = useContext(Context);
  const tiles = arr.map((el, i) => (
    <Tile
      key={i + `${el}`}
      tileIndex={i + 1}
      listIndex={listIndex}
      state={state}
    />
  ));
  return (
    <div className=" max-w-[300px] flex mx-auto space-x-[5px] my-[5px] app">
      {tiles}
    </div>
  );
};
export default TileList;
