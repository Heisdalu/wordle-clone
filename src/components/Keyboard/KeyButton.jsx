import PropTypes from "prop-types";
import DeleteIcon from "../../assets/DeleteIcon";
import Context from "../../context/Context";
import { useContext } from "react";
import { INCREASE_WORD, TILEINDEX } from "../../constants/constant";

const KeyButton = ({ value }) => {
  const ctx = useContext(Context);

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

  return (
    <button
      className={`px-[5px] rounded-[4px] w-[100%] bg-gen h-[58px] font-inter uppercase font-[700] ${
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
