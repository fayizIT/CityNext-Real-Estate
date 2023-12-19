import React from 'react'
// import { LinkContainer } from "react-router-bootstrap";


import {Route, Routes} from 'react-router-dom'
import HomeScreen from '../components/screens/Users/HomeScreen'
import LoginScreen from '../components/screens/Users/LoginScreen'
// import RegisterScreen from '../components/screens/Users/RegisterScreen'
// import ForgotScreen from '../components/screens/Users/ForgotScreen'
// import OtpScreen from '../components/screens/Users/OtpScreen'
// import ResetPasswordScreen from '../components/Users/ResetPassword'






// -----------------Admin--------------

import AdminLoginScreen from '../components/screens/Admins/AdminLoginScreen'
import AdminHomeScreen from '../components/screens/Admins/AdminHomeScreen'
// import AdminForgotScreen from '../screens/Admins/AdminForgotScreen'
// import AdminOtpScreen from '../screens/Admins/AdminOtpScreen'
// import AdminResetPasswordScreen from '../screens/Admins/AdminResetPasswordScreen'





const Routers = () => {
  return (
    <Routes>
        <Route path='/' element={<HomeScreen/>} />
        <Route path='/login' element={<LoginScreen/>} />
        {/* {/* <Route path='/register' element={<RegisterScreen/>} />        */}
        {/* <Route path='/forgot' element={<ForgotScreen/>} />        */}
        {/* <Route path='/otp' element={<OtpScreen/>} />        */} 
        {/* <Route path='/resetPassword' element={<ResetPasswordScreen/>} />    */}



{/* ----------------Admin Routes------------- */}
<Route path='/admin/login' element={<AdminLoginScreen/> } />
<Route path='/admin/' element={<AdminHomeScreen/> } />
{/* <Route path='/admin/forgot' element={<AdminForgotScreen/> } />
<Route path='/admin/otp' element={<AdminOtpScreen/> } />
<Route path='/admin/resetPassword' element={<AdminResetPasswordScreen/> } /> */}



    </Routes>
  )
}

export default Routers
