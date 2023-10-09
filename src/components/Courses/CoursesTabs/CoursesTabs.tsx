import {useMemo} from 'react';
import {Link, useLocation} from 'react-router-dom'
import clsx from 'clsx'
import s from './styles.module.css'
import {ITabs} from "../../../models/ITabs.ts";
import {coursesTabs} from "../../../utils/consts.ts";
import {observer} from "mobx-react-lite";

const CoursesTabs = () => {
    const sectionTabs:ITabs[] = coursesTabs //времнная заглушка, табы приходят с сервера
    const location = useLocation()

    const sectionTabList = useMemo(() => sectionTabs?.map((tab: ITabs) => {
        const buttonStyle = clsx(s.link, { [s.linkActive]: location.pathname.includes(tab.link) })
        return (
             <Link key={tab.id} className={buttonStyle} to={tab.link}>
                {tab.name}
            </Link>
        )
    }), [location.pathname])

    return (
        <div className={s.container}>
            {sectionTabList}
        </div>
    )
};

export default observer(CoursesTabs);