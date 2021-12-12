import LaptopComp from "./components/LaptopComp";
import PhoneComp from "./components/PhoneComp";
import WatchComp from "./components/WatchComp";
import ComputerComp from "./components/ComputerComp";

function App() {
  return (
    <div className="App">
      <h1>Shop</h1>
      <LaptopComp />
      <PhoneComp />
      <WatchComp />
      <ComputerComp />
    </div>
  );
}

export default App;
