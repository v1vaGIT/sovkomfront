import{FC} from 'react';
import s from './styles.module.css'
import PageTitle from "../pageTitle/PageTitle";

export interface IProfileHeader{
    pageTitle: string,
    pageText: string,
}

const ProfileHeaderSection:FC<IProfileHeader> = ({pageTitle, pageText}) => {

    return (
        <div className={s.profileHeader__container}>
            <PageTitle title={pageTitle} className={s.profileTitle}/>
            <p>{pageText}</p>
        </div>
    );
};

export default ProfileHeaderSection;