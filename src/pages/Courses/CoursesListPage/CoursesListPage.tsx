import {observer} from "mobx-react-lite";
import CoursesList from "../../../components/Courses/CoursesList/CoursesList.tsx";

const CoursesListPage = () => {

    return (
        <>
            <CoursesList/>
        </>
    );
};

export default observer(CoursesListPage);