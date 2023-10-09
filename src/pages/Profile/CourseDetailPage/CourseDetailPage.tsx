import {useContext, useEffect} from 'react';
import s from './styles.module.css'
import {Link, useParams} from "react-router-dom";
import {Context} from "../../../main";
import {observer} from "mobx-react-lite";
import {ILesson} from "../../../models/ILesson.ts";

const CourseDetailPage = () => {

    const {store} = useContext(Context)
    const {id} = useParams()
    console.log(id)

    useEffect(()=>{
        if (!store.lessonsList){
            if (id){
                const idToNumber = parseInt(id)
                store.fetchCourseLessons(idToNumber)
            }
        }
    },[])

    return (
        <div className={s.lessonsList__wrap}>
            {
                store.lessonsList && store.lessonsList.length > 0 ?
                    store.lessonsList.map((lesson: ILesson) => {
                        return(
                            <div key={lesson.id}>
                                <Link to={`${lesson.id}`} className={s.buttonToLesson}>{lesson.title}</Link>
                            </div>
                        )
                    })
                    :
                    <p>В курсе на данный момент отсутствуют уроки.</p>
            }
        </div>

    );
};

export default observer(CourseDetailPage);