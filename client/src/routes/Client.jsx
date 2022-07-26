import { Routes, Route } from "react-router-dom";

import Home from '../pages/Home/Home';
import SignUp from '../pages/SignUp/SignUp';
import LogIn from '../pages/LogIn/LogIn';
import Blog from '../pages/Blog/Blog';

export default function Client(){
    return(
            <Routes>
                <Route path="/" element={<Home />} ></Route>
                <Route path="blog" element={<Blog />} ></Route>
                <Route path="login" element={<LogIn />} ></Route>
                <Route path="signup" element={<SignUp />} ></Route>
            </Routes>
    )
}
