import React from 'react'
import {ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css"
import {Routes, Route} from 'react-router-dom';
import Layout from './components/Layout.tsx';
import Post from "./pages/Posts/Post.tsx";
import Login from "./pages/Auth/LogIn.tsx";
import PageNotFound from "./pages/404/404.tsx";
import CurrentPost from "./pages/Posts/CurrentPost.tsx";

const App: React.FC = () => {
    return (
        <>
            <ToastContainer/>
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route index element={<Post/>}/>
                    <Route path="/posts/:id/comments" element={<CurrentPost/>}/>
                    <Route path="/signin" element={<Login/>}/>
                </Route>
                <Route path="*" element={<PageNotFound />} />
            </Routes>
        </>
    )
}

export default App
