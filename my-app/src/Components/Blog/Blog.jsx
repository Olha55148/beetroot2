import axios from 'axios'
import { useEffect, useState } from "react";

import "./Blog.scss";
import Blog1 from './Blog1/Blog1';


// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';
// const Blog = (props) => <div className="div-blog">
//     <span className="title-general">Blog</span>
//     <div className="blog1-wrqpper">
//         <Blog1></Blog1>
//         <Blog1></Blog1>
//         <Blog1></Blog1>
//         <Blog1></Blog1>
//     </div>


// </div>
const Blog = () => {
    const [blogData, setBlogData] = useState([]);
    useEffect (() => {
        axios('https://jsonplaceholder.typicode.com/posts').then(res => setBlogData(res.data))
    }, []);
return <div className="div-blog"> blog
{blogData.map(item => <Blog1 key={item.id} {...item}></Blog1>)}
{/* <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card> */}
</div>
};

export default Blog





