import "../Location/Location.scss";
import location1 from "../../assets/Location1.png";
const Location = () => {

    return <div className="wrapper-location"> 
    
     <img className="wrapper-location__img1" src={location1} alt="icon" />
     <div className="wrapper-location__text">
        <h1 className="wrapper-location__text--street">771 Lost Round</h1>
        <h1 className="wrapper-location__text--city">Sacramento CA</h1>
     </div>

</div>
}
export default Location

