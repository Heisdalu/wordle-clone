import { WORLDE, RESULT_OBJ } from "./constant";

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
    currentDate: +new Date(),
    unique:null,
    listIndex: 1,
    tileIndex: 1,
    allUserInputWord: RESULT_OBJ,
    userWord: [],
  };

  //   console.log(newDay >= 1);
  //   console.log(localData);
  return newDay >= 1 ? newDataFortheDay : localData;

  //   console.log((presentDate - dateAt00AM) / (1000 * 60 * 60 * 24));
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

  console.log(wordState);
  return wordState;

  //   if (!word.includes(letter)) {
  //     color = "#787C7E";
  //   }.

  // if (present) {
  //   console.log(word.indexOf(letter));
  //   const sameLetter = word[index - 1];
  //   color = sameLetter === letter ? "#6AAA64" : "#C9B458";
  // }

  // return "#6AAA64";
};

export const hashUnique = (value) => {
  return parseInt(value, 36);
};

export const colorDetector = (value) => {
  return value === "G" ? "#6AAA64" : value === "Y" ? "#C9B458" : "#787C7E";
};
