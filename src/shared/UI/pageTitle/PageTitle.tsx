import {FC} from 'react';

export interface PageTitleProps {
    title: string;
    className: string
}

const PageTitle: FC<PageTitleProps> = ({title, ...props}) => {
    return (
        <h2 {...props}>
            {title}
        </h2>
    );
};

export default PageTitle;