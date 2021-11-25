import React from 'react';
import Footer from '../components/general/Footer';
import Navigation from '../components/general/Navigation';
import { DataTable } from '../components/Plugins/DataTable';

const Employees = () => {

    const ButtonNavigationContent = {
        currentNavName: 'Home',
        urlPath: '/'
    }
    
    return (
        <div className="employees">
            <Navigation navContent={ButtonNavigationContent}/>

            <div className="title-page-employee-list">
                <h1>CURRENT EMPLOYEES</h1>
            </div>
            <div className="form-block">
               <DataTable/>
            </div>
            <Footer/>
        </div>
    );
};

export default Employees;