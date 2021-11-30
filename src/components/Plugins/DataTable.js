import React from "react";

export const DataTable = (props) => {

    /*
    function loadTableData(props){
        const tableBody = document.getElementById('tableDataDisplay');
        let dataHtml = "";

        for(let element of userData){
            dataHtml+=`<tr></tr>`
        }
    }
    */

    //Créer un systeme de tri de données pour chaque colonne
    

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
        </div>
    );
};


