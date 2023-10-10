import { useEffect, useState} from 'react';
import s from './styles.module.css'
import {Link, useParams} from "react-router-dom";
import {observer} from "mobx-react-lite";
import {CoursesService} from "../../../services/CoursesService.ts";

const Lesson = () => {

    const [lesson, setLesson] = useState(null)
    const {id} = useParams()

    useEffect(()=>{
        async function fetchLesson(){
            console.log('test')
            if (id){
                const idToNumber = parseInt(id)
                const response = await CoursesService.fetchLesson(idToNumber);
                console.log('урок', response)
                // @ts-ignore
                setLesson(response)
            }
        }
        fetchLesson()
    },[])

    // @ts-ignore
    return (
        <>
            <div className={s.lesson__headerWrap}>

                <Link className={s.lesson__backToCourse} to={'/profile/my-courses/'}>Вернуться к списку курсов</Link>

                <div className={s.lesson__title}>
                    Управление командой
                </div>
            </div>
            <div className={s.lessons__container}>
                {
                    lesson ?
                        // @ts-ignore
                        lesson.data.content.map((content) => {
                            if (content.type === "p"){
                                return (
                                    <div>
                                        <p>{content.value}</p>
                                        <br/>
                                    </div>
                                )
                            }
                            if (content.type === "b"){
                                return (
                                    <div>
                                        <p><b>{content.value}</b></p>
                                        <br/>
                                    </div>
                                )
                            }
                        })
                        :
                        <p>В данный урок еще не добавлен контент</p>
                }
            </div>
        </>
    );
};

export default observer(Lesson);