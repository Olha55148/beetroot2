import Form from 'react-bootstrap/Form';
import './InputSelect.scss'

const InputSelect = (props) => {
    const SelectChangeHandler = (event) => {
        console.log(event.target.value)
      }
return (
  
       
            

          <Form.Group className="input-group" controlId="formBasicEmail">
      <Form.Label>{props.title}</Form.Label>
      <Form.Select onChange={SelectChangeHandler} aria-label="Default select example">
      <option disabled="disabled" selected="selected">Choose option</option>
            <option>Subject1</option>
            <option>Subject2</option>
            <option>Subject3</option>
    </Form.Select>
    </Form.Group>
         
       
   
)
    
}
export default InputSelect