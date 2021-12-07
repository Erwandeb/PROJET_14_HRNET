import React, {useState, useEffect, useContext} from 'react';
import { DropdownList } from '../Plugins/DropdownList';
import { ModalDialog } from '../Plugins/ModalDialog';
import dropDown from '../../dropDown';
import { DatePicker } from '../Plugins/DatePicker';
import {userContext} from '../../userContext';


const FormName = () => {

    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [street , setStreet] = useState("");
    const [city, setCity] = useState("");
    const [zipCode, setZipCode] = useState(0);
    const [displayModal, setDisplayModal] = useState(false);
    const [optionList, setOptionList] = useState({});
    const [stateOfEmployee, setStateOfEmployee] = useState("");
    const [departementEmployee, setdepartementEmployee] = useState("");
    const [birthDate , setBirthDate] = useState();
    const [startDate, setStartDate] = useState();
    const modalText = "Employee created !";
    const [userData, setUserData] = useState({
        firstname : "",
        lastname : "",
        birthdate : "",
        startdate: "",
        street : "",
        city : "",
        zipCode : 0,
        stateOfEmployee:"",
        departementEmployee: ""
    });

    const {dataContext, setDataContext } = useContext(userContext);
 

    /**
    * 1- récupère les données du formulaire et les pousse dans le store Redux.
    * 2- Envoie une modale de confirmation a l'utilisateur
    */
    const handleSavingForm = (e) => {

        e.preventDefault();
        setDisplayModal(true);

        setUserData({
            firstname : firstname,
            lastname : lastname,
            birthdate : birthDate,
            startdate: startDate,
            street : street,
            city : city,
            zipCode : zipCode,
            stateOfEmployee:stateOfEmployee,
            departementEmployee: departementEmployee
        });
        
        console.log(dataContext);

    
        setDataContext({
            firstname : firstname,
            lastname : lastname,
            birthdate : birthDate,
            startdate: startDate,
            street : street,
            city : city,
            zipCode : zipCode,
            stateOfEmployee:stateOfEmployee,
            departementEmployee: departementEmployee
        }); 
       
        console.log("value from formulaire", dataContext);  
    }

 
    useEffect(() => {
        setOptionList(dropDown);
    },[]); 
    

    const hiddingModal = ()=>{
        setDisplayModal(false)
    }

    const handleStateChangeState = (id) => {
    setStateOfEmployee(id);
    }

    const handleStateChangeDepartement = (id) => {
    setdepartementEmployee(id);
    }

    const handleChangeBirthDate = (date)=>{
        setBirthDate({date})
    }


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
                            <DatePicker handleDate={birthDate => setBirthDate(birthDate)}/>
                        </label>
                        <label for="Start-date">
                            Start date :  
                            <DatePicker handleDate={startDate => setStartDate(startDate)}/>
                        </label>
                </fieldset>
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
                            City :  
                            <input 
                            type="text" 
                            id="lastname"
                            onChange={(e)=>setCity(e.target.value)}
                            value={city}
                            />
                        </label>
                        <label htmlFor="state">
                            State :  
                            <DropdownList 
                            options={optionList?.states?.map((element)=>{
                                return {
                                    id:element.abbreviation,
                                    value:element.name
                                }  
                            })}
                            onChange={handleStateChangeState}/>
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
                <fieldset className="services">
                    <legend>Services</legend>
                    <label htmlFor="department" className="departement-style">Department</label>
                        <DropdownList 
                        options={optionList?.departement?.map((element)=>{
                            return {
                                id:element,
                                value:element
                                }
                            })}
                            onChange={handleStateChangeDepartement} 
                        />
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
