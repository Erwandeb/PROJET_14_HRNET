import React, {useState, useContext} from "react";
import { BrowserRouter, Routes , Route} from "react-router-dom";
import Home from './pages/CreateEmployee';
import Employees from "./pages/EmployeeList";
import './style/index.scss';
import { userContext } from './userContext.js';


function App() {

  const [users, setUsers] = useState({
    firstname : "Mr",
    lastname : "testman",
    birthdate : "",
    startdate: "",
    street : "",
    city : "",
    zipCode : 0,
    stateOfEmployee:"",
    departementEmployee: ""
  });

 

  const value = { users, setUsers };


  return (
    <div className="App">
      <userContext.Provider value={{users,setUsers}}>
        <BrowserRouter>
          <Routes>
            <Route path="/" exact element={<Home/>}/>
            <Route path="/Employees" exact element={<Employees/>}/>
          </Routes>
        </BrowserRouter>
      </userContext.Provider>
    </div>
  );
}

export default App;
