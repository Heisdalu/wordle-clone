import PropTypes from "prop-types";
import DeleteIcon from "../../assets/DeleteIcon";

const KeyButton = ({ value }) => {
  return (
    <button className="px-[5px] rounded-[4px] w-[100%] bg-gen h-[58px] font-inter uppercase font-[700]">
      {value === "Del" ? <DeleteIcon /> : value}
    </button>
  );
};
export default KeyButton;

KeyButton.propTypes = {
  value: PropTypes.string,
};
