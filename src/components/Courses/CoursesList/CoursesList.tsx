import {useContext, useEffect} from 'react';
import {Context} from "../../../main.tsx";
import {useParams} from "react-router-dom";
import {observer} from "mobx-react-lite";
const CoursesList = () => {
    const {link} = useParams()
    console.log(link)
    const {store} = useContext(Context)
    console.log(store.coursesList)

    useEffect(()=>{
        if (!store.coursesList){
            store.fetchAllCourses()
        }
    },[])

    return (
        <>
            {
                (store.coursesList && store.coursesList.length > 0) ?
                    <div>
                        КУРСЫ ЕСТЬ
                    </div>
                    :
                    <div>
                        Курсов нет
                    </div>
            }
        </>
    );
};

export default observer(CoursesList);