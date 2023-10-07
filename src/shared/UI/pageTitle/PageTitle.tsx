import React, {FC} from 'react';
import s from './style.module.css'

export interface PageTitleProps {
    title: string;
}

const PageTitle: FC<PageTitleProps> = ({title, ...props}) => {
    return (
        <h2 {...props}>
            {title}
        </h2>
    );
};

export default PageTitle;