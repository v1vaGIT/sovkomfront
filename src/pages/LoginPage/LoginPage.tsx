import React from 'react';
import s from './styles.module.css'
import loginImg from '../../shared/assets/img/loginIMG.png'
const LoginPage = () => {

    return (
        <div className={s.loginPage__container}>
            <div className={s.loginPage__imgContainer}>
                <img className={s.loginPage__img} src="src/shared/assets/img/loginIMG.png" alt=""/>
            </div>
            <div className={s.loginPage__textContainer}>
                <div className={s.loginPage__title}>
                    <p>Изучай мир, не выходя из дома!</p>
                </div>
                <div className={s.loginPage__text}>
                    <p>Измени свою жизнь с помощью онлайн обучения вместе с Совкомбанк</p>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;