import {useContext, useEffect} from 'react';
import {Context} from "../../../main.tsx";
import {useParams} from "react-router-dom";
import {observer} from "mobx-react-lite";
import s from './styles.module.css'
const CoursesList = () => {
    const {link} = useParams()
    console.log(link)
    const {store} = useContext(Context)
    console.log('список', store.coursesList)
    console.log('список2', store.isAuth)

    useEffect(()=>{
        if (!store.coursesList){
            store.fetchAllCourses()
        }
    },[])

    return (
        <div className={s.coursesListContainer}>
            {
                (store.coursesList?.courses && store.coursesList.courses.length > 0) ?
                    <div>
                        КУРСЫ ЕСТЬ
                    </div>
                    :
                    <div>
                        К сожалению курсов в данной категории не найдено
                    </div>
            }
        </div>
    );
};

export default observer(CoursesList);