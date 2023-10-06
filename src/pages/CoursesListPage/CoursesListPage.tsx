import React from 'react';
import s from './style.module.css'
import CoursesList from "../../components/Courses/CoursesList/CoursesList.tsx";
import PageTitle from "../../shared/UI/pageTitle/PageTitle.tsx";
const CoursesListPage = () => {

    return (
        <>
            <div className={s.coursesListPage__wrap}></div>
            <div className={s.coursesListPage__container}>
                <PageTitle title={'Ближайшие курсы'}/>
                <CoursesList/>
            </div>
        </>
    );
};

export default CoursesListPage;