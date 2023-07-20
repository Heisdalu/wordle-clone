import { useContext, useEffect, useState } from "react";
import TileList from "./TileList";
import axios from "axios";
import Context from "../../context/Context";
import { colorFunc } from "../../constants/helper";

// eslint-disable-next-line react/prop-types
const TilesMain = ({ unique }) => {
  const ctx = useContext(Context);

  const [wordNotValid, setWordNotValid] = useState("");

  // console.log("z".codePointAt());
  const arr = Array(6).fill(0);
  const data = arr.map((el, i) => (
    <TileList
      key={i + `${el}`}
      listIndex={i + 1}
      state={ctx}
      wordNotValid={wordNotValid}
    />
  ));

  console.log(wordNotValid);
  // colorFunc("daddy", "wears");

  const click = async (value) => {
    const validWord = unique.toString(36);
    // console.log(validWord);
    const stringValue = value.join("");
    // console.log(stringValue);
    try {
      const wordisValid = await axios(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${stringValue}`
      );
      console.log(wordisValid);
      const colorState = colorFunc(validWord, stringValue);
      ctx.checkWordisValidState({
        listIndex: ctx.listIndex,
        colorState,
        allUserInputWord: ctx.allUserInputWord,
      });
      setWordNotValid("");
    } catch (e) {
      console.log(e);
      if (e.message === "Network Error") {
        setWordNotValid("NETWORK_ERROR");
      }
      if (e.message.includes("Request failed")) {
        setWordNotValid("ERROR_PRESENT");
      }

      console.log(e.message);
    }
  };

  useEffect(() => {
    window.addEventListener(
      "keydown",
      (e) => {
        if (e.key === "Tab" && e.target.tagName === "INPUT") {
          e.preventDefault();
        }

        if (e.key === "Enter") {
          const word = [...ctx.userWord];
          console.log(word);
          const isAllLetters = word.every(
            (el) => el.codePointAt() >= 97 && el.codePointAt() <= 122
          );

          console.log(word.length !== 5, isAllLetters);

          if (word.length !== 5 || !isAllLetters) return;
          click(word);
        }
      },
      { once: true }
    );
  }, [ctx.userWord]);

  return <div className="m-[2rem]">{data}</div>;
};
export default TilesMain;
