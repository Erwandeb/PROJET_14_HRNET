import React,{useContext, useState} from "react";
import { userContextGeneral } from "../../userContext";

export const DataTable = (props) => {
    const {userData, setUserData} = useContext(userContextGeneral);

    console.log(userData)
    /*
    function loadTableData(props){
        const tableBody = document.getElementById('tableDataDisplay');
        let dataHtml = "";

        for(let element of userData){
            dataHtml+=`<tr></tr>`
        }
    }
    */
   /**
    *            <div className="table-display">
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
            </div>
    */

    //console.log(userData)
    
    return (
        <userContextGeneral.Consumer>
            {
                user =>{
                    console.log(user)
                }
            }
        </userContextGeneral.Consumer>
     
    );
};


