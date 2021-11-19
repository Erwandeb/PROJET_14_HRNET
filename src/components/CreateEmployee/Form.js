import React, {useState} from 'react';


const FormName = () => {

 /*https://www.youtube.com/watch?v=SEkfzqIgvTo&ab_channel=Academind  ===>>> stateless component */


    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [street , setStreet] = useState("");
    const [city, setCity] = useState("");
    const [zipCode, setZipCode] = useState(0)

    const handleSavingForm = (e) =>{
        /**
        * 1- récupère les données du formulaire et les pousse dans le store Redux.
        * 2- Envoie une modale de confirmation a l'utilisateur
        */
        e.preventDefault();


    }



    return (
        <div className="formDisplay">
            <form action="#" onSubmit={handleSavingForm} >
                <fieldset className="identity">
                    <legend>Identity</legend>
                        <label for="first-name">
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
                        <label for="last-name">
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
                        <label for="Birthdate">
                            Birthdate :  
                            
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
                            <input 
                            type="text" 
                            id="street"
                            onChange={(e)=>setStreet(e.target.value)}
                            value={street}
                            />
                        </label>
                        <label for="city">
                            city :  
                            <input 
                            type="text" 
                            id="lastname"
                            onChange={(e)=>setCity(e.target.value)}
                            value={city}
                            />
                        </label>
                        <label for="state">
                            state :  
                            <input type="text"></input>
                        </label>
                        <label for="Zip-code">
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





/*
const SignIncontent = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const  handleLogin =(e)=>{
        e.preventDefault();

        const identificationError = document.getElementById('identification-error');

        axios({
            method: "post",
            url:`${process.env.REACT_APP_API_URL}api/v1/user/login`,
            data: {
                 email:username,
                password:password,
            },
        })
        .then((res)=>{
            localStorage.setItem("token", res.data.body.token);
            window.location='/profil';
        })
        .catch((err) => {
            identificationError.innerHTML = "Vos identifiants sont incorrects !";
            console.log(err.data);
        })
    };
                
    return (
        <section className="sign-in-content">
            <i className="fa fa-user-circle sign-in-icon"></i>
            <h1>Sign In</h1>
            <form action="" onSubmit={handleLogin}>
                <div className="input-wrapper">
                    <label htmlFor="username">Username</label>
                    <input 
                        type="text" 
                        id="username"
                        onChange={(e)=>setUsername(e.target.value)}
                        value={username}
                        minLength="2"
                        maxLength="15"
                    />
                </div>
                <div className="input-wrapper">
                    <label htmlFor="password">Password</label >
                        <input 
                            type="password" 
                            id="password"
                            onChange={(e)=>setPassword(e.target.value)}
                            value={password}
                            minLength="2"
                            maxLength="15"
                        />
                </div>
                <div className="input-remember">
                    <input 
                        type="checkbox" 
                        id="remember-me"
                    />
                    <label htmlFor="remember-me">Remember me</label>
                </div>
                <div id="identification-error"></div>
                <button type="submit" className="sign-in-button">Sign in</button>
            </form>
        </section>
    );
};

*/