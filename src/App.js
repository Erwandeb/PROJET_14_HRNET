import React from "react";
import { BrowserRouter, Routes , Route} from "react-router-dom";
import Home from './pages/CreateEmployee';
import Employees from "./pages/EmployeeList";
import './style/index.scss';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Home/>}/>
          <Route path="/Employees" exact element={<Employees/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
