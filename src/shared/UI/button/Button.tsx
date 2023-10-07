import {FC} from 'react';

export interface IButton {
    title: string,
    className: string,
    onClick: ()=>void,
    disabled: boolean
}

const Button:FC<IButton> = ({title, ...props}) => {

    return (
        <button {...props}>
            {title}
        </button>
    );
};

export default Button;