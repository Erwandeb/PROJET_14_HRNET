import React,{useContext, useState} from "react";
import { userContextGeneral } from "../../userContext";

export const DataTable = (props) => {
    const {userData, setUserData} = useContext(userContextGeneral);

   

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

    
    return (
        <userContextGeneral.Consumer >
            {
                user => {
                    console.log("userdata from datatable 2", user)
                    return <div>{user.users.firstname}</div>

                }
            }
        </userContextGeneral.Consumer>
     
    );
};




