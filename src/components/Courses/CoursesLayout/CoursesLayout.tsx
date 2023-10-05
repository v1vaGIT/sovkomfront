import CoursesTabs from "../CoursesTabs/CoursesTabs.tsx";
import {Outlet} from "react-router-dom";

const CoursesLayout = () => {
    return (
        <>
            <CoursesTabs/>
            <Outlet/>
        </>
    );
};

export default CoursesLayout;