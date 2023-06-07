import profile1 from "../../../assets/profilelg.eab8d882.png";
import "./Header.scss";
import { RxEnvelopeClosed } from "react-icons/rx";;

const Header = () => {

    return <div className="main-header"> 
    <RxEnvelopeClosed className="main-header__fa"/>
     <img className="main-header__profile" src={profile1} alt="icon" />
     

</div>


}
export default Header