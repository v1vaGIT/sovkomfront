import {useMemo} from 'react';
import {useLocation, useNavigate} from 'react-router-dom'
// import clsx from 'clsx'
import s from './styles.module.css'
import {ITabs} from "../../../models/ITabs.ts";
import {coursesTabs} from "../../../utils/consts.ts";

const CoursesTabs = () => {
    const sectionTabs:ITabs[] = coursesTabs //времнная заглушка, табы приходят с сервера
    const location = useLocation()
    const navigate = useNavigate()

    const sectionTabList = useMemo(() => sectionTabs?.map((tab: ITabs) => {
        // const buttonStyle = clsx(s.link, { [s.linkActive]: location.pathname.includes(tab.link) })
        // className={buttonStyle}
        return (
             <button key={tab.id} onClick={()=>{navigate(`${tab.link}`)}}>
                {tab.name}
            </button>
        )
    }), [location.pathname])

    return (
        <div className={s.container}>
            {sectionTabList}
        </div>
    )
};

export default CoursesTabs;