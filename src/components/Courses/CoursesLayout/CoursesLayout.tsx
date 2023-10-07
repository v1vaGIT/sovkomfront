import CoursesTabs from "../CoursesTabs/CoursesTabs.tsx";
import {Outlet} from "react-router-dom";
import PageTitle from "../../../shared/UI/pageTitle/PageTitle.tsx";
import s from './styles.module.css'

const CoursesLayout = () => {
    return (
        <>
            <div className={s.coursesListPage__wrap}></div>
            <div className={s.coursesListPage__container}>
                <PageTitle title={'Ближайшие курсы'} className={s.pageTitle}/>
                <CoursesTabs/>
                <Outlet/>
            </div>
        </>
    );
};

export default CoursesLayout;