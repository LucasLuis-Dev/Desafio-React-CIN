
import React from 'react';
import { loginUser } from '../../services/AuthService';
import { useNavigate } from 'react-router-dom';
import AuthForm from '../../components/form-Login/authform';


import Title from '../../components/title/title';
import "./login.css"

const LoginPage = () => {
    const navigate = useNavigate();
    const handleLoginSubmit = ({ email, psw }) => {
        const user = loginUser(email, psw);

        if (user) {
            console.log('Login successful');
            navigate('/home');
            
        } else {
            console.error('Invalid credentials');
        }
    };

  return (
    <div className='login__container'>
        <div className='login-form__container'>
            <img className='login-form-img'  src='https://cdn.discordapp.com/attachments/965066624556232737/1193724394019766383/Horizontal-Vermelho-Logotipo-CIn-UFPE.png?ex=65adc179&is=659b4c79&hm=3a2a270c928e152b044e7b15e85059aa4104050298e330bf5e2f3fac639d04ee&' alt=''/>

            <div className='login-form-informations'>
                <Title title="Login"/>
                <AuthForm type="login" onSubmit={handleLoginSubmit} />
                <p className='login-redirect'>Não possui uma conta? <a href='/register'>Clique aqui!</a></p>
            </div>
            
        </div>
    </div>
)};

export default LoginPage;
