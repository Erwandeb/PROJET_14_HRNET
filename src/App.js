import React, {useState, useContext} from "react";
import { BrowserRouter, Routes , Route} from "react-router-dom";
import Home from './pages/CreateEmployee';
import Employees from "./pages/EmployeeList";
import './style/index.scss';
import {userContextGeneral} from './userContext';


function App() {

  const [users, setUsers] = useState({
    firstname : "Monsieur",
    lastname : "test",
    birthdate : "",
    startdate: "",
    street : "",
    city : "hawaii",
    zipCode : 0,
    stateOfEmployee:"",
    departementEmployee: ""
  });

 

  const value = { users, setUsers };


  return (
    <div className="App">
      <userContextGeneral.Provider value={value}>
        <BrowserRouter>
          <Routes>
            <Route path="/" exact element={<Home/>}/>
            <Route path="/Employees" exact element={<Employees/>}/>
          </Routes>
        </BrowserRouter>
      </userContextGeneral.Provider>
    </div>
  );
}

export default App;
