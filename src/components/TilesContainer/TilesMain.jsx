import TileList from "./TileList";

const TilesMain = () => {
  const arr = Array(5).fill(0);
  const data = arr.map((el, i) => (
    <TileList key={i + `${el}`} listIndex={i + 1} />
  ));

  window.addEventListener("keydown", (e) => {
    if (e.key === "Tab" && e.target.tagName === "INPUT") {
      e.preventDefault();
    }
  });

  return <div className="m-[2rem]">{data}</div>;
};
export default TilesMain;
