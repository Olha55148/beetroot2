import "./News1.scss";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


// const News1 = () => <div className="blue"></div>



const News1 = ({title, description, creator}) => <div className="blue"><Card style={{ width: '18rem' }}>
<Card.Body>
  <Card.Title>{title}</Card.Title>
  <Card.Text>
   {description}
  </Card.Text>
  
  {/* <Button variant="primary"></Button> */}
</Card.Body>
</Card>
</div>
export default News1;