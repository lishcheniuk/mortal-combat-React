import { useContext } from "react";
import FirstScreen from "./components/FirstScreen";
import SecondScreen from "./components/SecondScreen";
import { RootContext } from "./context/rootContext";

function App() {
  const { activeScreen } = useContext(RootContext);
  const screens = [<FirstScreen />, <SecondScreen />];

  return (
    <div className="App">
      {screens[activeScreen]}
    </div>
  );
}

export default App;
