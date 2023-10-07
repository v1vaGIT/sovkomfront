import React from 'react';
import s from './styles.module.css'
import {Outlet} from "react-router-dom";
const ProfileLayout = () => {
    return (
        <>
            <div className={s.profilePage__wrap}></div>
            <Outlet/>
        </>
    );
};

export default ProfileLayout;