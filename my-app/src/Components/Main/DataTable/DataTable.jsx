import "./DataTable.scss";
import Counter from "../../Counter/Counter";
import Location from "../../Location/Location";
import PropertyStatus from "./PropertyStaus/PropertyStaus";



const data = [
    {
       property: null,
    date: 'Sun Feb 25 2020',
    rent: 3000,
    deposit: 9000,
    status: 0
    },
    {
        property: null,
     date: 'Thu Mar 12 2020',
     rent: 2300,
     deposit: 4600,
     status: 2
     },
     
    

]
const DataTable = () =>

    <div className="wrapper-table">
        <div className="wrapper-table__header">
            <h3 className="wrapper-table__header--title">Active Deposits</h3>  <Counter value={2}></Counter>
        </div>
        <table>
            <tr className="wrapper-table__head">
                <th>Company</th>
                <th>Contact</th>
                <th>Country</th>
                <th>Contact</th>
                <th>Country</th>
            </tr>
{
    data.map(({date, rent, deposit, status}) => 
        <tr className="wrapper-table__row">
                <td><Location></Location></td>
                <td>{new Date(date).toLocaleDateString()}</td>
                <td>${rent}</td>
                <td>${deposit}</td>
                <td><PropertyStatus status={status}></PropertyStatus></td>
            </tr>)
    
}

        </table>
    </div>
// <div className='wrapper-sidebarItem__row'>
//     <FaHome className='fa' />
//     <h1 className='wrapper-sidebarItem__title'>{title}</h1>
// </div>

export default DataTable;