//Router..............
import { BrowserRouter,Route,Routes } from "react-router-dom"



//components..............

import Header from "../components/Header"
import Footer from "../components/Footer"


//pages..............
import Home from '../pages/Home'
import Authors from '../pages/Authors'
import AuthorPost from '../pages/AuthorPost'
import CategoryPosts from '../pages/CategoryPosts'
import CreatePost from '../pages/CreatePost'
import Dashboard from '../pages/Dashboard'
import DeletePost from '../pages/DeletePost'
import EditPost from '../pages/EditPost'
import Errorpage from '../pages/Errorpage'
import Login from '../pages/Login'
import Logout from '../pages/Logout'
import Postdetail from '../pages/PostDtail'
import Register from '../pages/Register'
import UserProfile from '../pages/UserProfile'


export default function Router() {
  return (
  <>
  <BrowserRouter>
    <Header/>
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/authors" element={<Authors/>}/>
        <Route path="/posts/user/:id"  element={<AuthorPost/>}/>
        <Route path="/posts/categories/:category" element={<CategoryPosts/>}/>
        <Route path="/create" element={<CreatePost/>}/>
        <Route path="/mypost/:id" element={<Dashboard/>}/>
        {/* <Route path="/" element={<DeletePost/>}/> */}
        <Route path="/posts/:id/edit" element={<EditPost/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/logout" element={<Logout/>}/>
        <Route path="/posts/:id" element={<Postdetail/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/profile/:id" element={<UserProfile/>}/>
        <Route path="*" element={<Errorpage/>}/>


    </Routes>
    <Footer/>
  </BrowserRouter>

  </>
  )
}
