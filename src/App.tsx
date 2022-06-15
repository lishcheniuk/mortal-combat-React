import React, { useContext } from "react";
import FirstScreen from "./components/FirstScreen";
import SecondScreen from "./components/SecondScreen";
import { RootContext, IRootContext } from "./context/rootContext";

const App: React.FC = () => {
  const { activeScreen } = useContext<IRootContext>(RootContext);
  const screens = [<FirstScreen />, <SecondScreen />];

  return (
    <div className="App">
      {screens[activeScreen]}
    </div>
  );
}

export default App;