import Header from "./components/Header/Header";
import Keyboard from "./components/KeyBoard/Keyboard";
import TilesMain from "./components/TilesContainer/TilesMain";

const App = () => {
  const before = 1689548400000;
  const present = 1689634800000;
  const presentDate = new Date();
  const day = presentDate.getDate();
  const month = presentDate.getMonth();
  const year = presentDate.getFullYear();
  // console.log(day, month, year);

  // console.log((present - before) / (1000 * 60 * 60 * 24));
  return (
    <div className="app">
      <Header />
      <TilesMain />
      <Keyboard />
    </div>
  );
};

export default App;
