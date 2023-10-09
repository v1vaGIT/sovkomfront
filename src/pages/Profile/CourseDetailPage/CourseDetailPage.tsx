import React, {useContext, useEffect, useState} from 'react';
import s from './styles.module.css'
import {Link, useNavigate, useParams} from "react-router-dom";
import {Context} from "../../../main";
import {observer} from "mobx-react-lite";

const CourseDetailPage = () => {

    const {store} = useContext(Context)
    const {id} = useParams()
    const [currentLesson, setCurrentLessons] = useState(null)
    console.log(id)

    useEffect(()=>{
        if (!store.lessonsList){
            if (id){
                store.fetchCourseLessons(id)
            }
        } else {
            console.log('список', store.lessonsList)
        }
    },[])


    //useState (номер урока)

    return (
        <div className={s.lessonsList__wrap}>
            <Link to={'14'} className={s.buttonToLesson}>УРОК 1</Link>
            <Link to={'14'} className={s.buttonToLesson}>УРОК 1</Link>
            <Link to={'14'} className={s.buttonToLesson}>УРОК 1</Link>
        </div>

    );
};

export default observer(CourseDetailPage);