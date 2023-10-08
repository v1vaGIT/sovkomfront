import s from './styles.module.css'
import LoginForm from "../../components/LoginForm/LoginForm.tsx";
const LoginPage = () => {

    return (
        <>
            <div className={s.loginPage__container}>
                <div className={s.companyLogo}></div>
                <div className={s.loginForm__container}>
                    <LoginForm/>
                </div>
                <div className={s.loginPage__imgContainer}>
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
            {/*<LoginForm/>*/}
            {/*<div className={s.loginPage__imgContainer}>*/}
            {/*    <img className={s.loginPage__img} src="../../shared/assets/img/loginIMG.png" alt=""/>*/}
            {/*</div>*/}
            {/*<div className={s.loginPage__textContainer}>*/}
            {/*    <div className={s.loginPage__title}>*/}
            {/*        <p>Изучай мир, не выходя из дома!</p>*/}
            {/*    </div>*/}
            {/*    <div className={s.loginPage__text}>*/}
            {/*        <p>Измени свою жизнь с помощью онлайн обучения вместе с Совкомбанк</p>*/}
            {/*    </div>*/}
            {/*</div>*/}
        </>
    );
};

export default LoginPage;