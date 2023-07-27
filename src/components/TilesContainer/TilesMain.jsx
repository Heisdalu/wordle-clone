import { useContext, useEffect, useState } from "react";
import TileList from "./TileList";
import axios from "axios";
import Context from "../../context/Context";
import { colorFunc } from "../../constants/helper";

// eslint-disable-next-line react/prop-types
const TilesMain = ({ unique }) => {
  const ctx = useContext(Context);

  const [wordNotValid, setWordNotValid] = useState("");

  const arr = Array(6).fill(0);
  const data = arr.map((el, i) => (
    <TileList
      key={i + `${el}`}
      listIndex={i + 1}
      state={ctx}
      wordNotValid={wordNotValid}
    />
  ));

  const click = async (value) => {
    const isAllLetters = value.every(
      (el) => el.codePointAt() >= 97 && el.codePointAt() <= 122
    );

    if (value.length !== 5 || !isAllLetters) return;

    const validWord = unique.toString(36);
    const stringValue = value.join("");

    try {
      await axios(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${stringValue}`
      );
      // word is exist in the dictionary
      const colorState = colorFunc(validWord, stringValue);
      ctx.checkWordisValidState({
        listIndex: ctx.listIndex,
        colorState,
        allUserInputWord: ctx.allUserInputWord,
        success: validWord === stringValue,
      });
      setWordNotValid("");
    } catch (e) {
      if (e.message === "Network Error") {
        setWordNotValid("NETWORK_ERROR");
      }
      if (e.message.includes("Request failed")) {
        // add an identifer cuz if the word is not word twice.. the state does not rerender.. sp we set an identifer to cause a rerender when word is not found
        setWordNotValid(`ERROR_PRESENT${+new Date()}`);
      }
    }
  };

  useEffect(() => {
    const word = [...ctx.userWord];
    window.addEventListener(
      "keydown",
      (e) => {
        if (e.key === "Tab" && e.target.tagName === "INPUT") {
          e.preventDefault();
        }

        if (e.key === "Enter") {
          click(word);
        }
      },
      { once: true }
    );

    const virtual = (e) => {
      if (e.target.dataset.value !== "Enter") return;
      click(word);
    };

    document
      .querySelector(".enter")
      ?.addEventListener("click", virtual, { once: true });

    return () =>
      document
        .querySelector(".enter")
        ?.removeEventListener("click", virtual, { once: true });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ctx.userWord]);

  return <div className="m-[2rem]">{data}</div>;
};
export default TilesMain;
