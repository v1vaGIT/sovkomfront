import {FC, useState} from 'react';
import s from './style.module.css'
import {ICourseCard} from "../../../models/ICourseCard.ts";
import moment from 'moment'
import Button from "../button/Button.tsx";
import {store} from "../../../main.tsx";
import {observer} from "mobx-react-lite";

const CourseCard:FC<ICourseCard> = (
    {
        id,
        title,
        placesLeft,
        startAt,
        endAt,
        lessonsTotal,
    }
) => {

    const [places, setPlaces] = useState(placesLeft)
    const [buttonText, setButtonText] = useState('Разблокировать курс')
    const [isBtnDisabled, setIsBtnDisabled] = useState(false)

    const signUp = async (id: number) => {
        await store.signUpOnCourse(id);
        console.log('стараюсь зарегистрировать на курс')
        if (placesLeft){
            setPlaces(placesLeft - 1)
        }
        setButtonText('Курс добавлен')
        setIsBtnDisabled(true)
    }

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
            {
                placesLeft &&
                <div className={s.courseCard__placesLeftContainer}>
                    Осталось мест: {places}
                </div>
            }
            <div className={s.courseCard__infoSection}>
                <Button
                    title={buttonText}
                    className={s.button}
                    onClick={() => signUp(id)}
                    disabled={isBtnDisabled}
                />
                {
                    lessonsTotal &&
                    <div className={s.courseCard__lessonsStatus}>
                        {lessonsTotal} уроков
                    </div>
                }
            </div>
        </div>
    );
};

export default observer(CourseCard);