import "./App.css";
import Navbar from "./components/Navbar";
import Payments from "./components/Payments";

function App() {
  return (
    <div className="flex flex-row">
        <Navbar />
        <Payments />
    </div>
  );
}

export default App;
