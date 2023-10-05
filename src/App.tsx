import {useContext} from 'react'
import './App.css'
import LoginPage from "./pages/LoginPage/LoginPage";
import {Route, Routes} from 'react-router-dom'
import {Context} from "./main.tsx";
import RedirectToPage from "./shared/UI/redirector/RedirectToPage.tsx";
import Hi from "./components/Hi.tsx";
import Header from "./shared/UI/header/Header.tsx";
import Footer from "./shared/UI/footer/Footer.tsx";

function App() {

    const {store} = useContext(Context)

    return (
        <div className={'appWrap'}>
            {
                store.isAuth ? (
                    <>
                        <Header/>
                        <Routes>
                            <Route path="courses/" element={<Hi/>}>

                            </Route>
                            <Route path='*' element={<RedirectToPage link={"courses/"} />}/>
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

export default App
