import {FC, useContext, useEffect} from 'react'
import './App.css'
import LoginPage from "./pages/LoginPage/LoginPage";
import {Route, Routes} from 'react-router-dom'
import {Context} from "./main.tsx";
import RedirectToPage from "./shared/UI/redirector/RedirectToPage.tsx";
import Header from "./shared/UI/header/Header.tsx";
import Footer from "./shared/UI/footer/Footer.tsx";
import CoursesLayout from "./components/Courses/CoursesLayout/CoursesLayout.tsx";
// import Hi from "./components/Hi.tsx";
// import CoursesList from "./components/Courses/CoursesList/CoursesList.tsx";
import {observer} from "mobx-react-lite";
import CoursesListPage from "./pages/CoursesListPage/CoursesListPage.tsx";

const App:FC = () =>  {
    const {store} = useContext(Context)

    useEffect(() => {
        if (localStorage.getItem('token')) {
            console.log('проверка авторизации')
            store.checkAuth()
        }
    }, [])

    return (
        <div className={'appWrap'}>
            {
                store.isAuth ? (
                    <>
                        <Header/>
                        <Routes>
                            {/*<Route path="courses/" element={<CoursesLayout/>}>*/}
                                <Route path="courses/:link/" element={<CoursesListPage/>}/>
                            {/*</Route>*/}
                        </Routes>
                    </>
                ) : (
                    <Routes>
                        <Route path='login/' element={<LoginPage/>} />
                        <Route path='*' element={<RedirectToPage link={"login/"} />}/>
                    </Routes>
                )
            }
            <Footer/>
        </div>
    )
}

export default observer(App)