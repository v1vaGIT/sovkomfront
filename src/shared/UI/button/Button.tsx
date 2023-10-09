import {FC} from 'react';

export interface IButton {
    title: string,
    className?: string,
    onClick?: any,
    type?: 'submit' | 'reset' | 'button' | undefined,
    disabled: boolean,
}

const Button:FC<IButton> = ({title, type, ...props}) => {

    return (
        <button {...props} type={type}>
            {title}
        </button>
    );
};

export default Button;