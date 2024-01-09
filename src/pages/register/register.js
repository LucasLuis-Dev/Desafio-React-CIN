import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { registerUser } from '../../services/AuthService';

import Title from '../../components/title/title';
import AuthForm from '../../components/authForm/authForm';
import Notification from '../../components/notification/notification';

import "./register.css"

const RegisterPage = () => {
  const navigate = useNavigate();
  const [notificationKey, setNotificationKey] = useState(0);
  const [notification, setNotification] = useState({ message: '', success: true });
  const handleRegisterSubmit = ({ email, psw }) => {
    try {
      registerUser({ email, psw });
      
      setNotification({ message: '✅ Registration successful', success: true });
      navigate('/login');
    } catch (error) {
      setNotification({ message: '❎ Registration failed', success: false });
    }
    setNotificationKey(notificationKey + 1);
  };

  return (
   
    <div className='register__container'>
      <Notification message={notification.message} success={notification.success} keyProp={notificationKey} />
      <div className='form__container'>
          <img className='form-img'  src='https://cdn.discordapp.com/attachments/965066624556232737/1193724394019766383/Horizontal-Vermelho-Logotipo-CIn-UFPE.png?ex=65adc179&is=659b4c79&hm=3a2a270c928e152b044e7b15e85059aa4104050298e330bf5e2f3fac639d04ee&' alt=''/>

          <div className='form-informations'>
              <Title title="Register"/>
              <AuthForm type="register" onSubmit={handleRegisterSubmit} />
              <p className='redirect'>Já possui uma conta? <a href='/login'>Clique aqui!</a></p>
          </div>
          
      </div>
  </div>
  );
};

export default RegisterPage;
