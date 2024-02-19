import React from 'react';
import './CSS/LoginSingup.css';

function LoginSingup() {
  return (
    <div className='loginsingup'>
      <div className='loginsingup-container'>
        <h1> Sing Up </h1>
        <div className='longinsingup-fields'>
          <input type='email' placeholder='informe seu email'/>
          <input type='text' placeholder='informe seu nome'/>
          <input type='password' placeholder='informe sua senha'/>
        </div>
        <button>Continue</button>
        <p className='longinsingup-login'> Already have an account? <span> Login here </span> </p>
        <div className='loginsingup-agrees'>
          <p> By continuing, i agree to the terms of use & privacy policy </p>
          <input type='checkbox' name='' id=''/>
        </div>
      </div>
    </div>
  );
};

export default LoginSingup;