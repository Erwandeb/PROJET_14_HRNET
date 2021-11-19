import React from 'react';
import Form from '../components/CreateEmployee/Form';
import Footer from '../components/general/Footer';
import Navigation from '../components/general/Navigation';


const Home = () => {
    return (
        <div className="home">
            <Navigation/>
            <div className="title">
                <h1>HR NET</h1>
            </div>
            <div className="cointainer">
                <h2> Create Employees</h2>
                <Form/>
             
            </div>
            <Footer/>
        </div>
    );
};

export default Home;