import KeyButton from "../Keyboard/KeyButton";

const Keyboard = () => {
  const firstArr = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"];
  const secondArr = ["a", "s", "d", "f", "g", "h", "j", "k", "l"];
  const thirdArr = ["Enter", "z", "x", "c", "v", "b", "n", "m", "Del"];
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
