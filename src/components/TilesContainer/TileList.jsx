import Tile from "./Tile";

const TileList = () => {
  const arr = Array(5).fill(0);
  console.log(arr);
  const tiles = arr.map((el, i) => <Tile key={i + `${el}`} />);
  return (
    <div className=" max-w-[300px] flex mx-auto space-x-[5px] my-[5px]">
      {tiles}
    </div>
  );
};
export default TileList;
