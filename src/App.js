import logo from "./logo.svg";
import "./App.css";
import Advertise from "./Components/Shared/Advertise/Advertise";
import Header from "./Components/Shared/Header/Header";
import Home from "./Components/Pages/HomePage/Home/Home";

function App() {
  return (
    <div className="App">
      <Advertise></Advertise>
      <Header></Header>
      <hr className="shadow-2xl" />
      <Home></Home>
    </div>
  );
}

export default App;
