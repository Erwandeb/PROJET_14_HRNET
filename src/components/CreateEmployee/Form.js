import React from 'react';



const FormName = () => {

    return (
        <div className="formDisplay">
            <form action="#" >
                <fieldset className="identity">
                    <legend>Identity</legend>
                        <label for="first-name">
                            Firstname :  
                            <input type="text"></input>
                        </label>
                        <label for="last-name">
                            Lastname :  
                            <input type="text"></input>
                        </label>
                        <label for="Birthdate">
                            Birthdate :  
                            <input type="text"></input>
                        </label>
                        <label for="Start-date">
                            Start date :  
                            <input type="text"></input>
                        </label>
                </fieldset>
                <i class="fas fa-arrow-right"></i>
                <fieldset className="adress">
                    <legend>Adress</legend>
                        <label for="first-name">
                            Street:  
                            <input type="text"></input>
                        </label>
                        <label for="city">
                            city :  
                            <input type="text"></input>
                        </label>
                        <label for="state">
                            state :  
                            <input type="text"></input>
                        </label>
                        <label for="Zip-code">
                            Zip-code  
                            <input type="text"></input>
                        </label>
                </fieldset>
                <i class="fas fa-arrow-right"></i>
                <fieldset className="services">
                    <legend>Services</legend>
                    <label for="department" className="departement-style">Department</label>
                        <select name="department" id="department">
                            <option>Sales</option>
                            <option>Marketing</option>
                            <option>Engineering</option>
                            <option>Human Resources</option>
                            <option>Legal</option>
                        </select>
                </fieldset>
               
            </form>
            <button className="save-form" type="submit">SAVE</button>
        </div>
    );
};

export default FormName;