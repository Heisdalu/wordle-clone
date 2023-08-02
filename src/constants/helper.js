import { WORLDE, RESULT_OBJ, ALPHABETS } from "./constant";

export const dataFunc = (obj) => {
  const presentDate = +new Date();
  const localData = JSON.parse(obj);
  const fullDate = new Date(localData.currentDate);
  const dateAt00AM = +new Date(
    `${fullDate.getMonth() + 1}-${fullDate.getDate()}-${fullDate.getFullYear()}`
  );

  const newDay = parseInt((presentDate - dateAt00AM) / (1000 * 60 * 60 * 24));
  // pasreint has issues for 0.00000000000000000000005 gives 5.. check alternatives
  const newDataFortheDay = {
    ...localData,
    success: false,
    currentDate: +new Date(),
    unique: null,
    listIndex: 1,
    tileIndex: 1,
    allUserInputWord: RESULT_OBJ,
    alphabets: ALPHABETS,
    userWord: [],
  };

  return newDay >= 1 ? newDataFortheDay : localData;
};

export const saveData = (obj) => {
  localStorage.setItem(WORLDE, JSON.stringify(obj));
};

export const colorFunc = (word = "thank", userWord) => {
  let newWord = word.split("");
  let wordState = "";
  for (let i = 0; i < userWord.length; i++) {
    if (newWord.includes(userWord[i])) {
      newWord[i] === userWord[i] ? (wordState += "G") : (wordState += "Y");
      newWord[newWord.indexOf(userWord[i])] = "";
    } else {
      wordState += "R";
    }
  }

  return wordState;
};

export const hashUnique = (value) => {
  return parseInt(value, 36);
};

export const colorDetector = (value) => {
  return value === "G"
    ? "#6AAA64"
    : value === "Y"
    ? "#C9B458"
    : value === "R"
    ? "#787C7E"
    : "#D3D6DA";
};

export const keyBoardColor = (alphabets, word, state) => {
  const alpha = { ...alphabets };

  for (let i = 0; i < word.length; i++) {
    if (alpha[word[i]] === "D") {
      alpha[word[i]] = state[i];
    }

    if (alpha[word[i]] === "Y" && state[i] === "G") {
      alpha[word[i]] = "G";
    }
  }

  return alpha;
};
