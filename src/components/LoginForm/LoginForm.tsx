import {FC, useContext, useState} from 'react';
import {Context} from "../../main.tsx";
import {observer} from "mobx-react-lite";
import s from './style.module.css'
import Input from "../../shared/UI/input/Input.tsx";
import Button from "../../shared/UI/button/Button.tsx";
import clsx from "clsx";

export interface IFromData{
    email: string,
    password: string
}

const LoginForm: FC = () => {
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const {store} = useContext(Context)

    const btnStyles = clsx(s.btnStyles)

    const loginMe = () => {
        store.login(email, password)
    }

    return (
        <div className={s.form__container}>
            <div className={s.form__title}>
                Вход в университет Совкомбанк
            </div>
            <form className={s.form__formFieldsContainer} onSubmit={loginMe}>
                <div className={s.form__formField}>
                            <Input
                                fieldName={'Пользователь'}
                                value={email}
                                onChange={(e: any) => setEmail(e.target.value)}
                                placeholder={'sovcom@mail.ru'}
                                type={'text'}
                            />

                </div>

                <div className={s.form__formField}>
                            <Input
                                fieldName={'Пароль'}
                                value={password}
                                onChange={(e: any) => setPassword(e.target.value)}
                                placeholder={'*****'}
                                type={'password'}
                            />
                </div>
                <div className={s.submitButton_container}>
                    <Button
                        title={'Войти'}
                        disabled={false}
                        type={'submit'}
                        className={btnStyles}
                    />
                </div>
            </form>
        </div>
        // <div>
        //     <input
        //         onChange={e => setEmail(e.target.value)}
        //         value={email}
        //         type={'text'}
        //         placeholder={'email'}
        //     />
        //     <input
        //         onChange={e => setPassword(e.target.value)}
        //         value={password}
        //         type={'text'}
        //         placeholder={'pwd'}
        //     />
        //     <button onClick={loginMe}>
        //         Отправить
        //     </button>
        // </div>
    );
};

export default observer(LoginForm);