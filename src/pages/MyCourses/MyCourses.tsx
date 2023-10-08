import {useContext, useEffect} from 'react';
import s from './styles.module.css'
import ProfileHeaderSection from "../../shared/UI/profileHeaderSection/ProfileHeaderSection";
import {observer} from "mobx-react-lite";
import {Context} from "../../main";
import {IMyCourse} from "../../models/IMyCourse";
import CourseCard from "../../shared/UI/courseCard/CourseCard";

const MyCourses = () => {

    const {store} = useContext(Context)

    useEffect(()=>{
        if (!store.myCoursesList){
            store.fetchMyCourses()
        }
    },[])

    return (
        <div className={s.myCoursesWrap}>
            <ProfileHeaderSection pageTitle={'Мои курсы'} pageText={'Открыто 3 курса. Незабудьте сдать задания в срок'}/>
            <div className={s.myCourses__activeCourses}>
                {
                    (store.myCoursesList && store.myCoursesList?.length > 0) ?
                        store.myCoursesList.map((course: IMyCourse) => {
                            if (course.isActive){
                                return(
                                    <div key={course.id}>
                                        <CourseCard
                                            id={course.id}
                                            title={course.title}
                                            type={course.type}
                                            lessonsTotal={course.lessonsTotal}
                                            startAt={course.startAt}
                                            endAt={course.endAt}
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
                                        <CourseCard
                                            id={course.id}
                                            title={course.title}
                                            type={course.type}
                                            startAt={course.startAt}
                                            endAt={course.endAt}
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