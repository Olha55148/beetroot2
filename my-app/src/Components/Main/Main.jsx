import "./Main.scss";
import Header from "./Header/Header";
import DataTable from "./DataTable/DataTable";
import ButtonAdd from "../ButtonAdd/ButtonAdd";
import router from '../../pages/router.Config'
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
  
  
 

const Main = () => {

    return <div className="wrapper-main"> 
    <Header/>
     <RouterProvider router={router} />
    <ButtonAdd/>
    <DataTable/>
</div>


}
export default Main