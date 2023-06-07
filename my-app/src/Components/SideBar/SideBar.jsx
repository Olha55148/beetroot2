import { useEffect, useState } from "react";
import axios from "axios";
import SideBarItem from "../SideBarItem/SideBarItem.jsx";
import profile from "../../assets/profilelg.eab8d882.png";
import "./SideBar.scss";

const SideBar = () => {


    const [SideBarData, setSideBarItems] = useState([]);
    useEffect(() => {
        axios('./data/icons.json').then(res => setSideBarItems(res.data.icons))
    }, []);
    return <div className="sidebar">
        <div>
            <img className="sidebar__img" src={profile} alt="icon" />
            <h1 className="sidebar__profile">Scott Grant</h1>
        </div>

        {SideBarData.map(item => <SideBarItem key={item.id} {...item}></SideBarItem>)}
    </div>



}
export default SideBar