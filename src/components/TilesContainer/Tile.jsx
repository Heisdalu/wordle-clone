// import { useRef } from "react";

const Tile = () => {
  // const inputRef = useRef()
  const changeHandler = (e) => {
    const numberType = Number(e.target.value);
    if (numberType) return (e.target.value = "");
    e.target.value = e.target.value.slice(0, 1);
  };

  return (
    <input
      type="text"
      onChange={changeHandler}
      className="h-[3.25rem] w-[3.25rem] border-1 text-center text-[2rem] font-inter font uppercase font-[700]"
    />
  );
};
export default Tile;
