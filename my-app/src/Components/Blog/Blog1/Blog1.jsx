import "./Blog1.scss";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

// const Blog1 = () => <div className="red"></div>
const Blog1 = ({title,body}) => <div className="red"><Card style={{ width: '18rem' }}>
<Card.Body>
  <Card.Title>{title}</Card.Title>
  <Card.Text>
   {body}
  </Card.Text>
  {/* <Button variant="primary">Go somewhere</Button> */}
</Card.Body>
</Card>
</div>

export default Blog1;