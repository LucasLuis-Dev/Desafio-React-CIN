import React, { useState } from 'react';
import Button from '../button/button';

import './form.css';

const AuthForm = ({ type, onSubmit }) => {
  const [email, setUsername] = useState('');
  const [psw, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ email, psw, type });
  };

  return (
    <form className={`form-${type}__container`} onSubmit={handleSubmit}>
      <input
        className='form-login-input'
        placeholder='Email'
        value={email}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        className='form-login-input'
        placeholder='Password'
        type='password'
        value={psw}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button text={type === 'login' ? 'Entrar' : 'Registrar'} />
    </form>
  );
};

export default AuthForm;
