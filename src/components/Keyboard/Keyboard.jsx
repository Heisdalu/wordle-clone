import KeyButton from "./KeyButton";

const Keyboard = () => {
  const firstArr = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
  const secondArr = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
  const thirdArr = ["Enter", "Z", "X", "C", "V", "B", "N", "M", "Del"];
  return (
    <div className="border-1 border-gray-950 max-w-[350px] mx-auto md:max-w-[400px]">
      <div className="flex space-x-[5px]">
        {firstArr.map((el, i) => (
          <KeyButton key={el + i} value={el} />
        ))}
      </div>
      <div className="flex space-x-[5px] my-[1rem] px-[0.7rem]">
        {secondArr.map((el, i) => (
          <KeyButton key={el + i} value={el} />
        ))}
      </div>
      <div className="flex space-x-[5px]">
        {thirdArr.map((el, i) => (
          <KeyButton key={el + i} value={el} />
        ))}
      </div>
    </div>
  );
};
export default Keyboard;
