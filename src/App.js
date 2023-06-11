import React,{useEffect} from "react";
import "./App.css";
import { BrowserRouter,Routes, Route } from "react-router-dom";
import {LoginPage,SignupPage,ActivationPage, HomePage, ProductsPage, BestSellingPage, EventsPage, FAQPage} from "./Routes.js";
import axios from "axios";
import { server } from "./server";
import 'react-toastify/dist/ReactToastify.css';
import { toast, ToastContainer } from "react-toastify";
import Store from "./redux/store";
import { loadUser } from "./redux/actions/user";

const App=() => {
  useEffect(()=> {
    Store.dispatch(loadUser());
    // axios.get(`${server}/user/getuser`, {withCredentials: true}).then((res)=>{
    //   toast.success(res.data.message);
    //   }).catch((err)=>{
    //     toast.error(err.response.data.message);
    //   });
  },[])

return(
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<HomePage/>} />
    <Route path='/login' element={<LoginPage/>} />
    <Route path='/sign-up' element={<SignupPage/>} />
    <Route path='/Activation/:url' element={<ActivationPage/>} />
    <Route path='/products' element={<ProductsPage/>} />
    <Route path='/best-selling' element={<BestSellingPage/>} />
    <Route path='/events' element={<EventsPage/>} />
    <Route path='/faq' element={<FAQPage/>} />


  </Routes>
  </BrowserRouter>
)
}

export default App;