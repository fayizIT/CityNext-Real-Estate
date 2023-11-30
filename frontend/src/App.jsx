// import { RouterProvider } from 'react-router-dom';
// import { ToastContainer, toast } from 'react-toastify';

// import 'react-toastify/dist/ReactToastify.css';

// import router from "./Routes/Router.jsx"

// function App() {
//   return (
//     <>

//       <ToastContainer/>

//       <RouterProvider router={router} />  
      

      

//     </>
//   )
// }

// export default App





import React from 'react'
import { Container } from 'react-bootstrap';
import { Outlet,useLocation } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import UserHeader from './components/Header/users/userHeader';
import AdminHeader from './components/Header/admins/adminHeader';

const App = () => {
  const location = useLocation()
  const isAdminSide = location.pathname.startsWith("/admin" );
  return (
    <>
      {isAdminSide ? <AdminHeader/> : <UserHeader/>}
      
      <ToastContainer/>
      <Container className='my-2'>
        <Outlet/> 
      </Container>
    </>
  )
}

export default App;