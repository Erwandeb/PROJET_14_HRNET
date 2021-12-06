import React,{useContext} from "react";
import { userContextGeneral } from "../../userContext";
import FormName from "../CreateEmployee/Form";

export const DataTable = (props) => {
    const userData = useContext(userContextGeneral);

   function testCall(){
       console.log("from datatable", userData)
   }

    return (
        <div className="table-display">
            <table>
                <thead>
                    <tr>
                    <th>Firstname</th>
                    <th>Lastname</th>
                    <th>Birthdate</th>
                    <th>Start date</th>
                    <th>City</th>
                    <th>Zip Code</th>
                    <th>State </th>
                    <th>Departement</th>
                    </tr>
                </thead>
                <tbody id="tableDataDisplay"></tbody>
            </table>
            <button onClick={testCall}></button>
        </div>
     
    );
};




