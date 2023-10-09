import {useContext, useEffect} from 'react';
import {Context} from "../../../main.tsx";
import {useParams} from "react-router-dom";
import {observer} from "mobx-react-lite";
import s from './styles.module.css'
import {ICourse} from "../../../models/ICourse.ts";
import CourseCard from "../../../shared/UI/courseCard/CourseCard.tsx";

const CoursesList = () => {
    const {link} = useParams()
    const {store} = useContext(Context)

    useEffect(()=>{
        if (!store.coursesList){
            store.fetchAllCourses()
        }
    },[])

    return (
        <>
            {
                (store.coursesList && store.coursesList.length > 0) ?
                    <div className={s.coursesListContainer}>
                        {
                            store.coursesList.map((course: ICourse) => {
                                if (link === 'all')
                                    return (
                                        <div key={course.id}>
                                            <CourseCard
                                                id={course.id}
                                                title={course.title}
                                                type={course.type}
                                                placesLeft={course.placesLeft}
                                                startAt={course.startAt}
                                                endAt={course.endAt}
                                                lessonsTotal={course.lessonsTotal}
                                                description={course.description}
                                            />
                                        </div>
                                    )
                                if (course.tabLink === link)
                                    return (
                                        <div key={course.id}>
                                            <CourseCard
                                                id={course.id}
                                                title={course.title}
                                                type={course.type}
                                                placesLeft={course.placesLeft}
                                                startAt={course.startAt}
                                                endAt={course.endAt}
                                                lessonsTotal={course.lessonsTotal}
                                                description={course.description}
                                            />
                                        </div>
                                    )
                            })
                        }
                    </div>
                    :
                    <div>
                        К сожалению курсов не найдено
                    </div>
            }
        </>
    );
};

export default observer(CoursesList);