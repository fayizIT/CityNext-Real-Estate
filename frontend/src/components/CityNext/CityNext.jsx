import React from 'react'
import { useLocation } from 'react-router-dom';
import Header from '../header/user/Header'
import AdminHeader from '../header/admins/AdminHeader'
import Routers from '../../route/Routers'

const CityNext=()=> {
    const location= useLocation()

let admin = location.pathname.startsWith('/admin')
  return (
    <div>   
  {admin ? <AdminHeader/> : <Header/>}
     <Routers/>
    </div>
  )
}

export default CityNext
