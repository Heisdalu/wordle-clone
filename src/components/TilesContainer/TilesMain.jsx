import TileList from "./TileList";

const TilesMain = () => {
  const arr = Array(5).fill(0);
  const data = arr.map((el, i) => <TileList key={i + `${el}`} />);
  return <div className="m-[2rem]">{data}</div>;
};
export default TilesMain;
