import {FC, useState} from 'react';
import s from './styles.module.css'
import clsx from "clsx";

export interface IInput {
    fieldName: string,
    value: string,
    onChange: any,
    error: any,
    type: string,
    placeholder?: string
}

const Input:FC<IInput> = ({ fieldName, value, onChange, error, type, placeholder, ...props }) => {

    const [isPwdVisible, setIsPwdVisible] = useState(false)
    const [inputType, setInputType] = useState(type)
    const inputStyle = clsx(s.inputField, { [s.inputFieldError]: error })

    const togglePasswordVisibility = () => {
        switch (inputType){
            case 'password':
                setInputType('text')
                setIsPwdVisible(true)
                break;
            case 'text':
                setInputType('password')
                setIsPwdVisible(false)
                break;
        }
    }

    return (
        <div className={s.inputFieldContainer}>
            <p className={s.fieldName}>{fieldName}</p>
            <div className={s.inputWrap}>
                {
                    type === 'password' &&
                    <button className={s.pwdToggle} type={'button'} onClick={togglePasswordVisibility}>
                        {
                            isPwdVisible ?
                                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M17.3884 8.77211C17.3636 8.71656 16.7682 7.39573 15.444 6.07133C13.6803 4.3074 11.4517 3.37501 8.99934 3.37501C8.48123 3.37443 7.96397 3.41659 7.4528 3.50108C7.35311 3.51772 7.25975 3.56091 7.18253 3.62612C7.1053 3.69132 7.04707 3.77613 7.01396 3.87162C6.98084 3.96711 6.97407 4.06976 6.99435 4.16877C7.01462 4.26779 7.0612 4.35951 7.12919 4.4343L14.2512 12.2685C14.3511 12.3784 14.4904 12.4443 14.6386 12.4519C14.7869 12.4595 14.9322 12.4081 15.0428 12.3091C16.6468 10.8724 17.3588 9.29547 17.3884 9.229C17.4203 9.15708 17.4368 9.07926 17.4368 9.00056C17.4368 8.92186 17.4203 8.84403 17.3884 8.77211Z" fill="#2E2E2E"/>
                                    <path d="M3.79123 2.43413C3.69087 2.32374 3.55076 2.25773 3.40174 2.25064C3.25271 2.24354 3.10697 2.29594 2.99657 2.3963C2.88618 2.49666 2.82017 2.63676 2.81308 2.78579C2.80598 2.93482 2.85838 3.08056 2.95874 3.19095L4.31164 4.67912C1.75782 6.24645 0.659866 8.66218 0.61096 8.77214C0.579009 8.84406 0.5625 8.92189 0.5625 9.00059C0.5625 9.07929 0.579009 9.15711 0.61096 9.22904C0.63568 9.28465 1.23114 10.6052 2.5554 11.9293C4.31912 13.6928 6.54763 14.625 8.99998 14.625C10.2604 14.6324 11.508 14.3728 12.6609 13.8633L14.2087 15.5659C14.3091 15.6763 14.4492 15.7423 14.5982 15.7494C14.7473 15.7565 14.893 15.7041 15.0034 15.6038C15.1138 15.5034 15.1798 15.3633 15.1869 15.2143C15.194 15.0653 15.1416 14.9195 15.0412 14.8091L3.79123 2.43413ZM8.99998 11.5313C8.53734 11.5315 8.0835 11.4048 7.68782 11.1651C7.29213 10.9254 6.96976 10.5817 6.75574 10.1715C6.54172 9.76138 6.44426 9.30038 6.47395 8.83869C6.50364 8.377 6.65934 7.93228 6.92413 7.55291L10.2432 11.2039C9.86415 11.4188 9.43576 11.5317 8.99998 11.5313Z" fill="#2E2E2E"/>
                                </svg>
                                :
                                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M17.389 8.77161C17.3643 8.71607 16.7689 7.39516 15.4446 6.07083C13.6809 4.30691 11.4523 3.37451 8.99998 3.37451C6.54763 3.37451 4.31905 4.30691 2.55533 6.07083C1.23107 7.39517 0.63568 8.71606 0.61096 8.77161C0.579009 8.84354 0.5625 8.92136 0.5625 9.00006C0.5625 9.07876 0.579009 9.15659 0.61096 9.22851C0.63568 9.28413 1.23114 10.6047 2.5554 11.9288C4.31912 13.6923 6.54763 14.6245 8.99998 14.6245C11.4523 14.6245 13.6808 13.6923 15.4446 11.9288C16.7688 10.6047 17.3643 9.28413 17.389 9.22851C17.421 9.15659 17.4375 9.07876 17.4375 9.00006C17.4375 8.92136 17.421 8.84354 17.389 8.77161ZM8.99998 6.46888C9.50062 6.46888 9.99001 6.61733 10.4063 6.89547C10.8225 7.17361 11.147 7.56894 11.3386 8.03146C11.5301 8.49399 11.5803 9.00294 11.4826 9.49395C11.3849 9.98497 11.1438 10.436 10.7898 10.79C10.4358 11.144 9.98482 11.3851 9.4938 11.4827C9.00279 11.5804 8.49384 11.5303 8.03132 11.3387C7.56879 11.1471 7.17346 10.8227 6.89533 10.4064C6.61719 9.99016 6.46873 9.50076 6.46873 9.00013C6.46949 8.32903 6.73642 7.68564 7.21095 7.2111C7.68549 6.73656 8.32889 6.46964 8.99998 6.46888Z" fill="#2E2E2E"/>
                                </svg>
                        }
                    </button>
                }
                <input className={inputStyle} value={value || ''} onChange={onChange} placeholder={placeholder} type={inputType} {...props}/>
                {error?.message && <p className={s.error}>{error?.message}</p>}
            </div>
        </div>
    );
};

export default Input;