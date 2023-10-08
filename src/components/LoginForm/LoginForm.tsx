import {FC, useContext, useState} from 'react';
import {Context} from "../../main.tsx";
import {observer} from "mobx-react-lite";
import s from './style.module.css'
import {Controller, useForm} from 'react-hook-form';
import Input from "../../shared/UI/input/Input.tsx";
import Button from "../../shared/UI/button/Button.tsx";
import clsx from "clsx";
import type { FieldValues } from "react-hook-form"

export interface IFromData{
    email: string,
    password: string
}

const LoginForm: FC = () => {
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const {store} = useContext(Context)

    const loginMe = () => {
        store.login(email, password)
    }

    return (
        <div>
            <input
                onChange={e => setEmail(e.target.value)}
                value={email}
                type={'text'}
                placeholder={'email'}
            />
            <input
                onChange={e => setPassword(e.target.value)}
                value={password}
                type={'text'}
                placeholder={'pwd'}
            />
            <button onClick={loginMe}>
                Отправить
            </button>
        </div>
    );
};

export default observer(LoginForm);