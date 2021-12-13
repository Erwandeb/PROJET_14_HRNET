import React, {useContext} from "react";
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


   
    function sortTableByColumn(table, column, asc = true) {
        const dirModifier = asc ? 1 : -1;
        const tBody = table.tBodies[0];
        const rows = Array.from(tBody.querySelectorAll("tr"));
    
        
        const sortedRows = rows.sort((a, b) => {
            const aColText = a.querySelector(`td:nth-child(${ column + 1 })`).textContent.trim();
            const bColText = b.querySelector(`td:nth-child(${ column + 1 })`).textContent.trim();
    
            return aColText > bColText ? (1 * dirModifier) : (-1 * dirModifier);
        });
    
        // Remove all existing TRs from the table
        while (tBody.firstChild) {
            tBody.removeChild(tBody.firstChild);
        }
    
        // newly sorted rows
        tBody.append(...sortedRows);
    
     
        table.querySelectorAll("th").forEach(th => th.classList.remove("th-sort-asc", "th-sort-desc"));
        table.querySelector(`th:nth-child(${ column + 1})`).classList.toggle("th-sort-asc", asc);
        table.querySelector(`th:nth-child(${ column + 1})`).classList.toggle("th-sort-desc", !asc);
    }
    

    document.querySelectorAll(".table-display th").forEach(headerCell => {
        headerCell.addEventListener("click", () => {
            console.log("")
            const tableElement = headerCell.parentElement.parentElement.parentElement;
            const headerIndex = Array.prototype.indexOf.call(headerCell.parentElement.children, headerCell);
            const currentIsAscending = headerCell.classList.contains("th-sort-asc");
    
            sortTableByColumn(tableElement, headerIndex, !currentIsAscending);
        });
    });

 
    return (
        <div className="table-display">
            <table>
                <thead>
                    <tr>
                        <th>Firstname</th>
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




