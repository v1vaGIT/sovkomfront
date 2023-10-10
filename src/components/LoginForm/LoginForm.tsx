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
            <div className={s.form__formFieldsContainer}>
                <div className={s.form__formField}>
                    <input

                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        placeholder={'sovcom@mail.ru'}
                        type={'text'}
                    />

                </div>

                <div className={s.form__formField}>
                    <input

                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        placeholder={'*****'}
                        type={'password'}
                    />
                </div>
                <div className={s.submitButton_container}>
                    <button

                        onClick={() => store.login(email, password)}
                        disabled={false}

                        className={btnStyles}
                    >Войти </button>
                </div>
            </div>
        </div>
    );
};

export default observer(LoginForm);