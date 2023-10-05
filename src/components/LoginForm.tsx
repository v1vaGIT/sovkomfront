import {FC, useContext, useState} from 'react';
import {Context} from "../main";
import {observer} from "mobx-react-lite";

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