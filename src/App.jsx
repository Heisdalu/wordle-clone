import Header from "./components/Header/Header";
import Keyboard from "./components/KeyBoard/Keyboard";
import TilesMain from "./components/TilesContainer/TilesMain";

const App = () => {
  
  return (
    <div className="app">
      <Header />
      <TilesMain />
      <Keyboard />
    </div>
  );
};

export default App;
