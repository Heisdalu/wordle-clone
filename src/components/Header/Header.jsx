import Question from "../../assets/question";
import StatsIcon from "../../assets/StatsIcon";
import ModePic from "../../assets/mode-icon.png";

const Header = () => {
  return (
    <div className="flex items-center p-[0.5rem] border-b-gray_b border-[1px] md:justify-center md:relative md:p-[1rem]">
      <h1 className="font-inter font-[700] text-[1.8125rem]">Wordle</h1>
      <nav className="flex ml-auto space-x-[1rem] md:ml-[0] justify-end md:absolute right-[1rem]">
        <button>
          <Question />
        </button>
        <button>
          <StatsIcon />
        </button>
        <button>
          <img src={ModePic} alt="" width={29} />
        </button>
      </nav>
    </div>
  );
};
export default Header;
