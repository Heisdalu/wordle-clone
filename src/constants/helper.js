import { WORLDE } from "./constant";

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
    listIndex: 1,
    tileIndex: 1,
  };

//   console.log(newDay >= 1);
//   console.log(localData);
  return newDay >= 1 ? newDataFortheDay : localData;


//   console.log((presentDate - dateAt00AM) / (1000 * 60 * 60 * 24));
};

export const saveData = (obj) => {
  localStorage.setItem(WORLDE, JSON.stringify(obj));
};
