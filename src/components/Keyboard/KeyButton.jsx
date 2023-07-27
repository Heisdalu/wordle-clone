import PropTypes from "prop-types";
import DeleteIcon from "../../assets/DeleteIcon";
import Context from "../../context/Context";
import { useContext, useEffect, useRef } from "react";
import { INCREASE_WORD, TILEINDEX } from "../../constants/constant";
import { colorDetector } from "../../constants/helper";

const KeyButton = ({ value }) => {
  const ctx = useContext(Context);
  const btnRef = useRef();

  const lastElem = ctx.allUserInputWord[5];

  const clickHandler = () => {
    if (!ctx.success === false || !lastElem.filled === false) return;
    if (value === "Enter" || value === "Del") {
      return;
    }

    ctx.updateWord({
      type: INCREASE_WORD,
      value: value,
      userWord: ctx.userWord,
      allUserInputWord: ctx.allUserInputWord,
      index: ctx.tileIndex,
      listIndex: ctx.listIndex,
    });
    // edit word first, then update state index cuz we could not get the indvidual title index, so we used it's state index then...
    ctx.updateIndex({ type: TILEINDEX, value: ctx.tileIndex });
  };

  useEffect(() => {
    if (value === "Enter" || value === "Del") return;
    const alphabets = ctx.alphabets;
    const white =
      alphabets[value] === "G" ||
      alphabets[value] === "Y" ||
      alphabets[value] === "R";
    btnRef.current.style.setProperty(
      "--btnColor",
      colorDetector(alphabets[value])
    );

    btnRef.current.style.setProperty("--whiteBtn", white ? "#fff" : "#000");
  }, [ctx.alphabets, value]);

  return (
    <button
      ref={btnRef}
      disabled={!ctx.success && !lastElem.filled ? false : true}
      className={`keyBoardBtn ${
        value === "Enter" || value === "Del" ? "bg-gen" : ""
      } px-[5px] rounded-[4px] w-[100%] h-[58px] font-inter uppercase font-[700] ${
        value === "Enter" ? "enter" : value === "Del" ? "Del" : ""
      }`}
      onClick={clickHandler}
      aria-label={value}
      data-value={value}
    >
      {value === "Del" ? <DeleteIcon /> : value}
    </button>
  );
};
export default KeyButton;

KeyButton.propTypes = {
  value: PropTypes.string,
};
