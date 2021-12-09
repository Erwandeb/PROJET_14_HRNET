import React,{useContext, useState} from "react";
import { userContext} from "../../userContext";


export const DataTable = (props) => {
    const {users} = useContext(userContext);

    
    let displayUsers = users.map(user => {
        return  <tr className="new-user-row">
                    <td>{user.firstname}</td>
                    <td>{user.lastname}</td>
                    <td>eoeo</td>
                    <td>deded</td>
                    <td>{user.street}</td>
                    <td>{user.city}</td>
                    <td>{user.zipCode}</td>
                    <td>{user.stateOfEmployee}</td>
                    <td>{user.departementEmployee}</td>
                </tr>
    })


    function sortTable(){
        console.log("trigger")
       
    }

 

    return (
        <div className="table-display">
            <table>
                <thead>
                    <tr>
                        <th onClick={sortTable}>Firstname</th>
                        <th>Lastname</th>
                        <th>Birthdate</th>
                        <th>Start date</th>
                        <th>Street</th>
                        <th>City</th>
                        <th>Zip Code</th>
                        <th>State </th>
                        <th>Departement</th>
                    </tr>
                </thead>
                <tbody id="tableDataDisplay">
                    {displayUsers}
                </tbody>
            </table>
        </div>
     
    );
};




