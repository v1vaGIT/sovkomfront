import s from './styles.module.css'

import logoFooter from '../../assets/img/logoFooter.svg'
import {useLocation} from "react-router-dom";
import clsx from "clsx";

const Footer = () => {
    const currentYear = new Date().getFullYear();
    const location = useLocation()

    const footerContainer = clsx(s.mainFooter, { [s.mainFooter__login]: location.pathname === '/login/' })

    return (
        <div className={footerContainer}>
            <div className={s.mainFooter__container}>
                <div className={s.container__leftContent}>
                    <p className={s.leftContent__license}>
                        Генеральная лицензия Банка России №963 от 5 декабря 2014 г. © 2004-{currentYear}, ПАО «Совкомбанк» Все права защищены
                    </p>
                    <p className={s.leftContent__cookie}>
                        ПАО «Совкомбанк» использует cookie (файлы с данными о прошлых посещениях сайта) для персонализации сервисов и удобства пользователей. Совкомбанк серьезно относится к защите персональных данных — <a className={s.cookie__policy} href='https://app.sovcombank.ru/policy/'>ознакомьтесь с условиями и принципами их обработки</a>. Вы можете запретить сохранение cookie в настройках своего браузера.
                    </p>
                </div>
                <div className={s.container__middleContent}>
                    <p className={s.middleContent__title}>
                        Контакты
                    </p>
                    <p className={s.middleContent__info}>
                        По вопросам обучения: <a className={s.info__phone} href='tel:+78002001918'>8 800 200 1918</a>
                    </p>
                </div>
                <div className={s.container__rightContent}>
                    <div className={s.rightContent__logo}>
                        <img src={logoFooter}/>
                    </div>
                    <div className={s.rightContent__app}>
                        <p className={s.app__info}>
                            Обучение в мобильном<br></br> приложении
                        </p>
                        <a className={s.app__link} href='#'>
                            <p>Скачать приложение</p>
                            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0 0H14V14H0V0Z" fill="white" fillOpacity="0.01"/>
                                <path d="M5.5415 3.20837H10.7915V8.45837" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M3.36719 10.633L10.7918 3.20837" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;