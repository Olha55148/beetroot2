import { FaHome, FaBeer} from 'react-icons/fa';
import "./SideBarItem.scss";

const icons ={
    home:  <FaHome className='fa' />,
    beer:  <FaBeer className='fa' />,
}
const SideBarItem = ({ title, icon }) =>

    <div className='wrapper-sidebarItem__row'>
        {icons[icon]}
        <h1 className='wrapper-sidebarItem__title'>{title}</h1>
    </div>

export default SideBarItem;