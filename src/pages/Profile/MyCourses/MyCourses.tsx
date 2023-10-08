import {useContext, useEffect} from 'react';
import s from './styles.module.css'
import ProfileHeaderSection from "../../../shared/UI/profileHeaderSection/ProfileHeaderSection.tsx";
import {observer} from "mobx-react-lite";
import {Context} from "../../../main.tsx";
import {IMyCourse} from "../../../models/IMyCourse.ts";
import MyCourseCard from "../../../components/Profile/MyCoursesCard/MyCourseCard.tsx";

const MyCourses = () => {

    const {store} = useContext(Context)

    useEffect(()=>{
        if (!store.myCoursesList){
            store.fetchMyCourses()
        }
    },[])

    return (
        <div className={s.myCoursesWrap}>
            <ProfileHeaderSection pageTitle={'Мои курсы'} pageText={'Незабудьте сдать задания в срок'}/>
            <div className={s.myCourses__activeCourses}>
                {
                    (store.myCoursesList && store.myCoursesList?.length > 0) ?
                        store.myCoursesList.map((course: IMyCourse) => {
                            if (course.isActive){
                                return(
                                    <div key={course.id}>
                                        <MyCourseCard
                                            id={course.id}
                                            title={course.title}
                                            type={course.type}
                                            lessonsTotal={course.lessonsTotal}
                                            startAt={course.startAt}
                                            endAt={course.endAt}
                                            isActive={course.isActive}
                                        />
                                    </div>
                                )
                            }
                        })
                        :
                        <p>У вас нет активных курсов</p>
                }
            </div>
            <div className={s.completedCourses__title}>
                Пройденные курсы
            </div>
            <div className={s.myCourses__completedCourses}>
                {
                    (store.myCoursesList && store.myCoursesList?.length > 0) ?
                        store.myCoursesList.map((course: IMyCourse) => {
                            if (!course.isActive){
                                return(
                                    <div key={course.id}>
                                        <MyCourseCard
                                            id={course.id}
                                            title={course.title}
                                            type={course.type}
                                            startAt={course.startAt}
                                            endAt={course.endAt}
                                            isActive={course.isActive}
                                        />
                                    </div>
                                )
                            }
                        })
                        :
                        <p>У вас нет пройденных курсов</p>
                }
            </div>
        </div>
    );
};

export default observer(MyCourses);