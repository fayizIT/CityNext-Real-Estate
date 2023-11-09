// // import React from 'react'
// import {BrowserRouter,Route,Routes} from 'react-router-dom'
// import Home from './pages/Home'
// import SignIn from './pages/SignIn'
// import SignUp from './pages/SignUp'
// import About from './pages/About'
// import Profile from './pages/Profile'
// import Header from './components1/Header'
// import Error from './pages/Error'


// export default function App() {
//   return (
//     <BrowserRouter>
//     <Header />
//     <Routes>

//      <Route path='/' element={<Home />} />
//      <Route path='/sign-in' element={<SignIn />} />
//      <Route path='/sign-up' element={<SignUp />} />
//      <Route path='/about' element={<About />} />
//      <Route path='/profile' element={<Profile />} />
//      <Route path='*' element={<Error/>}/>

       
//     </Routes>
   
//     </BrowserRouter>
//   )
// }






// // import React from 'react'
// import { Container } from 'react-bootstrap';
// import { Outlet,useLocation } from 'react-router-dom';
// import { ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import Header from './components/Header';
// import AdminHeader from './components/AdminHeader';

// const App = () => {
//   const location = useLocation()
//   const isAdminSide = location.pathname.startsWith("/admin" );
//   return (
//     <>
//       {isAdminSide ? <AdminHeader/> : <Header/>}
      
//       <ToastContainer/>
//       <Container className='my-2'>
//         <Outlet/> 
//       </Container>
//     </>
//   )
// }

// export default App;




import { RouterProvider } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

import router from "./Routes/router.jsx"

function App() {
  return (
    <>

      <ToastContainer/>

      <RouterProvider router={router} />  
      

      

    </>
  )
}

export default App