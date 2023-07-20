import { useContext, useEffect, useState } from "react";
import Header from "./components/Header/Header";
import Keyboard from "./components/KeyBoard/Keyboard";
import TilesMain from "./components/TilesContainer/TilesMain";
import axios from "axios";
import Context from "./context/Context";

const App = () => {
  // console.log(day, month, year);
  const { unique, updateUnique } = useContext(Context);
  // const binary = "divine";
  // const [data, setData] = useState("");
  const [error, setError] = useState(false);

  console.log(error);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios("https://api.frontendeval.com/fake/word");
        console.log(response.data);
        const hashWord = Number.parseInt(response.data, 36);
        updateUnique(hashWord);
      } catch (e) {
        console.log(e);
        setError(true);
      }
    };

    !unique && fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [unique]);

  if (error) {
    return (
      <div className="mt-[3rem] text-center p-[1rem]">Something went wrong</div>
    );
  }

  // console.log((present - before) / (1000 * 60 * 60 * 24));
  return (
    <div className="app">
      <Header />
      <TilesMain unique={unique} />
      <Keyboard />
    </div>
  );
};

export default App;
