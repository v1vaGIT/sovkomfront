import React, {FC, useContext, useState} from 'react';
import {Context} from "../main";

const LoginForm: FC = () => {

    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const {store} = useContext(Context)

    const sendFunc = () => {
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
            <button onClick={sendFunc}>
                Отправить
            </button>
        </div>
    );
};

export default LoginForm;