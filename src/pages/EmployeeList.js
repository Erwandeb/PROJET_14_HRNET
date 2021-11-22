import React from 'react';
import Footer from '../components/general/Footer';
import Navigation from '../components/general/Navigation';

const Employees = () => {

    const ButtonNavigationContent = {
        currentNavName: 'Home',
        urlPath: '/'
    }
    
    return (
        <div className="employees">
            <Navigation navContent={ButtonNavigationContent}/>
            <Footer/>
        </div>
    );
};

export default Employees;