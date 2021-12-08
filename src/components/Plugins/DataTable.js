import React,{useContext} from "react";
import { userContext} from "../../userContext";


export const DataTable = (props) => {
    const {users} = useContext(userContext);

    console.log(users)
 

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
                    <tr>
                        <td>toto</td>
                        <td>toto</td>
                        <td>toto</td>
                        <td>toto</td>
                        <td>toto</td>
                        <td>toto</td>
                        <td>toto</td>
                    </tr>
                </tbody>
            </table>
        </div>
     
    );
};




