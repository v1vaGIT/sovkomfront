import React, {useContext, useEffect, useState} from 'react';
import s from './styles.module.css'
import {Link, useNavigate, useParams} from "react-router-dom";
import {Context} from "../../../main";
const CourseDetailPage = () => {

    const {store} = useContext(Context)
    const {id} = useParams()
    const navigate = useNavigate()
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
        <div style={{marginTop: '150px'}}>
            detail
            <Link to={'14'}>LINK</Link>
        </div>

    );
};

export default CourseDetailPage;