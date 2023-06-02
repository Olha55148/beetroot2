
import './App.scss';
import Basic from './Components/Basic/Basic';

import UserForm from './Components/UserForm/UserForm';
// import ExpenseItem from './Components/ExpenseItem/ExpenseItem';
// const data = [
//   {
//   id: 2,
//   title: "title 2"
// },
// {
//   id: 2,
//   title: "title 2"
// },
// ]

const expenses = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: 'e2', 
  title: 'New TV', 
  amount: 799.49, 
  date: new Date(2021, 2, 12) },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

// const nameOfInput = [
//   {
//     id: '1',
//     title: 'First Name',
//   },
//   {
//     id: '2',
//     title: 'Last Name',
//   },
//   {
//     id: '3',
//     title: 'Email',
//   },
//   {
//     id: '4',
//     title: 'Last Name',
//   },
// ]
function App() {

  return (
    <>
<div>
      {/* <h2>Let's get started!</h2> */}
      {/* {expenses.map(({id, title, amount, date}) => <ExpenseItem key={id} title={title} amount={amount} date={date} />)} */}
      
    </div>
<div className='page-wrapper'>


      <div className='wrapper'>
        <div className='card card-4'>
          <div className='card-body'>
          <h2 class="title">Registration Form</h2>

       <UserForm></UserForm> 

        </div>
      </div>
      </div>
      </div>
      
    </>
  );
}

export default App;
