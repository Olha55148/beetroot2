// import { useState } from "react"
import "./UserForm.scss";
import Form from 'react-bootstrap/Form';
import InputText from '../Basic/InputText/InputText';
import InputCheck from '../Basic/InputCheck/InputCheck';
import InputEmail from '../Basic/InputEmail/InputEmail';
import InputNumber from '../Basic/InputNumber/InputNumber';
import InputSelect from '../Basic/InputSelect/InputSelect';
import Button from 'react-bootstrap/Button';



import InputBirthday from '../Basic/InputBirthday/InputBirthday';
const nameOfInput = [
  {
    id: '1',
    title: 'First Name',
  },
  {
    id: '2',
    title: 'Last Name',
  },
  {
    id: '3',
    title: 'Birthday',
  },
  {
    id: '3',
    title: 'Gender',
  },
  {
    id: '4',
    title: 'Email',
  },
  {
    id: '5',
    title: 'Phone Number',
  },
  {
    id: '6',
    title: 'Subject',
  },

]
const deaultFormValue = {
  firstName: '',
  lastName: '',
  age: '',
}
const submitHandller = (event) =>{
  event.preventDefault();
};
const UserForm = () => {

  return <Form onSubmit={submitHandller}>
    <div className="row row-space" >
      <InputText
        title={nameOfInput[0].title}
      >
      </InputText>

      <InputText
        title={nameOfInput[1].title}
      >
      </InputText>
      {/* {nameOfInput.map(({title}) => <InputText  title={title}/>)} */}
    </div>

    <div className="row row-space" >
      <InputBirthday
        title={nameOfInput[2].title}
      >
      </InputBirthday>
      <InputCheck
        title={nameOfInput[3].title}
      >
      </InputCheck>
    </div>

    <div className="row row-space" >
      <InputEmail
        title={nameOfInput[4].title}
      >
      </InputEmail>
      <InputNumber
        title={nameOfInput[5].title}
      >
      </InputNumber>
    </div>
    <InputSelect
        title={nameOfInput[6].title}
        >
    </InputSelect>
    <Button variant="primary">Submit</Button>{' '}
  </Form>


}
export default UserForm
