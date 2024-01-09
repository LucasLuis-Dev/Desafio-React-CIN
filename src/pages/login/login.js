
import React, {useState} from 'react';
import { loginUser } from '../../services/AuthService';
import { useNavigate } from 'react-router-dom';

import Title from '../../components/title/title';
import AuthForm from '../../components/authForm/authForm';
import Notification from '../../components/notification/notification';

import "./login.css"

const LoginPage = () => {
    const navigate = useNavigate();
    const [notificationKey, setNotificationKey] = useState(0);
    const [notification, setNotification] = useState({ message: '', success: true });
    const handleLoginSubmit = ({ email, psw }) => {
        const user = loginUser(email, psw);

        if (user) {
            setNotification({ message: '✅ Login successful', success: true });
            setTimeout(()=> {
                navigate('/home');
            }, 3000)
            
            
        } else {
            console.log('Login failed')
            setNotification({ message: '❎ Invalid credentials', success: false });
        }

        setNotificationKey(notificationKey + 1);
    };

  return (
    <div className='login__container'>
        <Notification message={notification.message} success={notification.success} keyProp={notificationKey}/>
        
        <div className='form__container'>
            <img className='form-img'  src='https://cdn.discordapp.com/attachments/965066624556232737/1193724394019766383/Horizontal-Vermelho-Logotipo-CIn-UFPE.png?ex=65adc179&is=659b4c79&hm=3a2a270c928e152b044e7b15e85059aa4104050298e330bf5e2f3fac639d04ee&' alt=''/>

            <div className='form-informations'>
                <Title title="Login"/>
                <AuthForm type="login" onSubmit={handleLoginSubmit} />
                <p className='redirect'>Não possui uma conta? <a href='/register'>Clique aqui!</a></p>
            </div>
            
        </div>
    </div>
)};

export default LoginPage;
