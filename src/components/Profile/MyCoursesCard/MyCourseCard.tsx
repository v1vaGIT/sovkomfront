import {FC} from 'react';
import s from './style.module.css'
import moment from 'moment'
import Button from "../../../shared/UI/button/Button.tsx";
import {observer} from "mobx-react-lite";
import {IMyCourse} from "../../../models/IMyCourse.ts";
import clsx from "clsx";

const MyCourseCard:FC<IMyCourse> = (
    {
        id,
        title,
        startAt,
        endAt,
        lessonsTotal,
        isActive
    }
) => {

    const openCourse = (id: number) => {
        console.log('открываю курс', id)
    }

    const btnStyles = clsx(s.button, { [s.buttonCompleted]: !isActive })

    return (
        <div className={s.courseCardContainer}>
            <div className={s.courseCard__titleSection}>
                <div className={s.courseCard__title}>
                    {title}
                </div>
                {
                    startAt ?
                        <div className={s.courseCard__dateContainer}>
                            Курс:&nbsp; <p>{moment(startAt).format("DD.MM").toString()}-{moment(endAt).format("DD.MM").toString()}</p>
                        </div>
                        :
                        <div className={s.courseCard__unlimitedDate}>
                            Бессрочный
                        </div>
                }
            </div>
            <div className={s.courseCard__infoSection}>
                <Button
                    title={isActive ? 'Открыть курс' : 'Завершено'}
                    className={btnStyles}
                    onClick={() => {openCourse(id)}}
                    disabled={!isActive}
                />
                {
                    isActive &&
                    <div className={s.courseCard__lessonsStatus}>
                        {lessonsTotal} уроков
                    </div>
                }
            </div>
        </div>
    );
};

export default  observer(MyCourseCard);