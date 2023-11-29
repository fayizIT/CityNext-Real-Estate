import { Outlet } from "react-router-dom";


import Header from "../components/Users/Header";

const UserAuthLayout = () => {

  return (
    <>
      <Header/>
      <Outlet />
    </>
  );
};

export default UserAuthLayout;        