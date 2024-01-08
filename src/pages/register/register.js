import React from 'react';
import { useNavigate } from 'react-router-dom';
import { registerUser } from '../../services/AuthService';

import Title from '../../components/title/title';
import AuthForm from '../../components/form-Login/authform';

import "./register.css"

const RegisterPage = () => {
  const navigate = useNavigate();
  const handleRegisterSubmit = ({ email, psw }) => {
    try {
      registerUser({ email, psw });
      console.log('Registration successful');
      navigate('/login');
    } catch (error) {
      console.error('Registration failed:', error.message);
    }
  };

  return (
   
    <div className='register__container'>
      <div className='register-form__container'>
          <img className='register-form-img'  src='https://cdn.discordapp.com/attachments/965066624556232737/1193724394019766383/Horizontal-Vermelho-Logotipo-CIn-UFPE.png?ex=65adc179&is=659b4c79&hm=3a2a270c928e152b044e7b15e85059aa4104050298e330bf5e2f3fac639d04ee&' alt=''/>

          <div className='register-form-informations'>
              <Title title="Register"/>
              <AuthForm type="register" onSubmit={handleRegisterSubmit} />
              <p className='register-redirect'>Já possui uma conta? <a href='/login'>Clique aqui!</a></p>
          </div>
          
      </div>
  </div>
  );
};

export default RegisterPage;
