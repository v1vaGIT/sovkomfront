import React from 'react';
import s from './style.module.css'


// @ts-ignore
const PageTitle = ({title}) => {
    return (
        <h2 className={s.title}>
            {title}
        </h2>
    );
};

export default PageTitle;