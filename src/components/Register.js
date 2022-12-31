import React, {Fragment, useState} from "react";
import { useNavigate } from "react-router-dom";


const Register = (props) => {
    const [registerUsername, setRegisterUsername] = useState('');
    const [registerPassword, setRegisterPassword] = useState('');
    const navigate = useNavigate();
   


    const register = (ev)=> {
        ev.preventDefault();
        fetch('https://strangers-things.herokuapp.com/api/2209-FTB-ET-WEB-AM/users/register', {
          method: "POST",
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            user: {
              username: registerUsername,
              password: registerPassword 
            }
          })
        })
        .then(response => response.json())
        .then(result => {
          if(!result.success){
            throw result.error;
          }
          console.log(result);
          navigate('/login');
    
        })
        .catch( err => console.log(err));
      }
    

    return (
       
      <div>
        <h3 className="welcome">Hey there, Stranger!<br/>
            Please register in order to login. You will be automatically redirected to login page if regristration is successful
        </h3>
        <form className="displayRegisterForm" onSubmit = { register }>
          <input
            placeholder='username'
            value={ registerUsername }
            onChange = { ev => setRegisterUsername(ev.target.value)}
          />
          <input 
            placeholder='password'
            value={ registerPassword }
            type="password"
            onChange = { ev => setRegisterPassword(ev.target.value)}
          />
          <button>Register</button>
        
        </form>
      </div>
      
    );
}

export default Register;