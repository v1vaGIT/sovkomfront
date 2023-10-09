import React from 'react';
import s from './styles.module.css'
import {Link} from "react-router-dom";
const Lesson = () => {
    return (
        <div className={s.lesson__headerWrap}>

            <Link className={s.lesson__backToCourse} to={'/profile/my-courses/12/'}>Вернуться к списку уроков</Link>

            <div className={s.lesson__title}>
                Управление командой
            </div>
        </div>
    );
};

export default Lesson;