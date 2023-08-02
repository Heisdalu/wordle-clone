import { useContext, useEffect, useState } from "react";
import Header from "./components/Header/Header";
import Keyboard from "./components/VirtualKeyboard/Keyboard";
import TilesMain from "./components/TilesContainer/TilesMain";
import axios from "axios";
import Context from "./context/Context";
import Loading from "./assets/Loading";
import Confetti from "react-confetti";
import useWindowSize from "react-use-window-size";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

const App = () => {
  const { unique, updateUnique, success } = useContext(Context);
  const [error, setError] = useState(false);
  const { width, height } = useWindowSize();

  const [loading, setLoading] = useState(false);


  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios("https://api.frontendeval.com/fake/word");
        const hashWord = Number.parseInt(response.data, 36);
        updateUnique(hashWord);
      } catch (e) {
        console.log(e);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    !unique && fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [unique]);

  if (loading) {
    return (
      <div className="h-[100vh] grid place-items-center">
        <Loading />;
      </div>
    );
  }

  if (error) {
    return (
      <div className="mt-[3rem] text-center p-[1rem]">Something went wrong</div>
    );
  }

  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        toastClassName="toasifyFont "
      />
      <div className="app">
        <Header />
        {success && (
          <div className="text-center border-1 ">
            <div>You won!!!</div>
            <Confetti width={width} height={height} />
          </div>
        )}

        <TilesMain unique={unique} />
        <Keyboard />
      </div>
    </>
  );
};

export default App;
