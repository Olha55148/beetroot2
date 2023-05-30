import "./News.scss";
import News1 from './News1/News1';
import axios from 'axios'
import { useEffect, useState } from "react";
// const News = (props) => <div className="div-news">
//     <span className="title-general">News</span>
//     <div className="news1-wrqpper">
//         <News1></News1>
//         <News1></News1>
//         <News1></News1>
//     </div>


// </div>


const News = () => {
    const [newsData, setBlogData] = useState([]);
    useEffect (() => {
        axios('https://newsdata.io/api/1/news?apikey=pub_23187b5c37554a3f6d491a7af7f5fe9b5b29a&q=cryptocurrency').then(res => setBlogData(res.data.results))
    }, []);
return <div className="div-news"> News
{newsData.map(item => <News1 key={item.id} {...item}></News1>)}


</div>
};

export default News