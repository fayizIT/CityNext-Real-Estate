// import React from 'react'



import {Route, Routes} from 'react-router-dom'
import HomeScreen from '../screens/Users/HomeScreen'
import LoginScreen from '../screens/Users/LoginScreen'
import RegisterScreen from '../screens/Users/RegisterScreen'
// import ForgotScreen from '../screens/Users/ForgotScreen'
// import OtpScreen from '../screens/Users/OtpScreen'


  const Routers = () => {
    return (
      <Routes>
        <Route path="/" element={<HomeScreen />}>
    <Route path="/login" element={<LoginScreen />} />
    <Route path="/register" element={<RegisterScreen />} />
    {/* <Route path="otpverification" element={<OtpScreen />}/> */}
   
  </Route>

</Routes>
        )
    }
  export default Routers;