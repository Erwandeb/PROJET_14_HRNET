import React, {useState, useEffect} from 'react';
import { DropdownList } from '../Plugins/DropdownList';
import { ModalDialog } from '../Plugins/ModalDialog';
import dropDown, { states } from '../../dropDown';

const FormName = () => {

    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [street , setStreet] = useState("");
    const [city, setCity] = useState("");
    const [zipCode, setZipCode] = useState(0);
    const [displayModal, setDisplayModal] = useState(false);
    const [optionList, setOptionList] = useState([]);
    const modalText = "Employee created !";


    /**
    * 1- récupère les données du formulaire et les pousse dans le store Redux.
    * 2- Envoie une modale de confirmation a l'utilisateur
    */
    const handleSavingForm = (e) =>{
        e.preventDefault();
        setDisplayModal(true);
    }

    
    /**
    * Affichage de la modal
    * 
    */
    const hiddingModal = ()=>{
        setDisplayModal(false)
    }

    
    /**
    * Handle data of select options list 
    * 
    */
    useEffect(() => {
        setOptionList(dropDown);
    });
    const departementOfEmployee = optionList.departement;
    const statesAdressOfEmployee = Object.entries(optionList.states);
    console.log(optionList.states.name)
 
    /*
    states.forEach(function(state) {
        const option = document.createElement('option');
        option.value = state.abbreviation;
        option.text = state.name;
        stateSelect.appendChild(option);
    });
    */

    return (
        <div className="formDisplay">
            <form action="#" onSubmit={handleSavingForm} >
                <fieldset className="identity">
                    <legend>Identity</legend>
                        <label htmlFor="first-name">
                            Firstname :  
                            <input 
                            type="text" 
                            id="firstname"
                            onChange={(e)=>setFirstname(e.target.value)}
                            value={firstname}
                            minLength="2"
                            maxLength="15"
                            />
                        </label>
                        <label htmlFor="last-name">
                            Lastname :  
                            <input 
                            type="text" 
                            id="lastname"
                            onChange={(e)=>setLastname(e.target.value)}
                            value={lastname}
                            minLength="2"
                            maxLength="15"
                            />
                        </label>
                        <label htmlFor="Birthdate">
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
                        <label htmlFor="first-name">
                            Street:  
                            <input 
                            type="text" 
                            id="street"
                            onChange={(e)=>setStreet(e.target.value)}
                            value={street}
                            />
                        </label>
                        <label htmlFor="city">
                            city :  
                            <input 
                            type="text" 
                            id="lastname"
                            onChange={(e)=>setCity(e.target.value)}
                            value={city}
                            />
                        </label>
                        <label htmlFor="state">
                            state :  
                            <DropdownList options={optionList.departement} />
                        </label>
                        <label htmlFor="Zip-code">
                            Zip-code  
                            <input 
                            type="number" 
                            id="zipcode"
                            onChange={(e)=>setZipCode(e.target.value)}
                            value={zipCode}
                            />
                        </label>
                </fieldset>
                <i class="fas fa-arrow-right"></i>
                <fieldset className="services">
                    <legend>Services</legend>
                    <label htmlFor="department" className="departement-style">Department</label>
                        <DropdownList options={departementOfEmployee} />
                </fieldset>
                <button className="save-form" type="submit" onClick={ModalDialog}>SAVE</button>
            </form>
            {
                displayModal ? (
                    <ModalDialog text={modalText} isHidding={hiddingModal}/>
                ):(
                    <div></div>
                )
            }
         
        </div>
    );
};

export default FormName;
