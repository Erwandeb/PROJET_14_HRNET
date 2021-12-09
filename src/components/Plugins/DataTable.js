import React,{useContext,useState} from "react";
import { userContext} from "../../userContext";


export const DataTable = (props) => {
    const {users} = useContext(userContext);

    
    const rowUser = users.map(user => {
        return  <tr>
        <td>{user.firstname}</td>
        <td>{user.lastname}</td>
        <td></td>
        <td></td>
        <td>{user.street}</td>
        <td>{user.city}</td>
        <td>{user.zipCode}</td>
        <td>{user.stateOfEmployee}</td>
        <td>{user.departementEmployee}</td>
    </tr>
    
    })
 

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
                <tbody id="tableDataDisplay">
                    {rowUser}
                </tbody>
            </table>
        </div>
     
    );
};




