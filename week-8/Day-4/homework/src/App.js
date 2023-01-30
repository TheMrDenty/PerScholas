import { Route, Routes } from "react-router-dom";
import Stock from "./pages/Stock";
import About from "./pages/About";
import Main from "./pages/Main";
import Stocks from "./pages/Stocks";
import Nav from "./components/Nav";

function App(props) {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/about' element={<About />} />
        <Route path="/stocks" element={<Stocks {...props} />} />
        <Route path='/stocks/:symbol' element={<Stock {...props}/>} />
      </Routes>
    </div>
  );
}

export default App;
