import React from 'react';
import s from './style.module.css'
import CoursesList from "../../components/Courses/CoursesList/CoursesList.tsx";
import PageTitle from "../../shared/UI/pageTitle/PageTitle.tsx";
import CoursesTabs from "../../components/Courses/CoursesTabs/CoursesTabs.tsx";
const CoursesListPage = () => {

    return (
        <>
                <CoursesList/>
        </>
    );
};

export default CoursesListPage;