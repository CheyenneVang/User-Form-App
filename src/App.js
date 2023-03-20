import React, { useState } from 'react';
import AddUser from './components/User/AddUser';
import './App.css';
import UsersList from'./components/User/UsersList';

function App() {
  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (uName, uAge) => {
    setUsersList((prevUsersList) => {
      return [...prevUsersList, { name: uName, age: uAge, id: Math.random().toString() }]
    });
  };

  return (
    <div className="App">
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={usersList} />
    </div>
  );
}

// Exercises
// import { render } from '@testing-library/react';
// import React, {useState} from 'react';
// import TransformToObjects from './components/exercise1/TransformToObjects';
// import ExerciseComponent from './components/exercise3/ExerciseComponent';
// import Product from './components/exercise4/Product';
// import './components/exercise4/styles.css';
// import './components/exercise5/styles.css'
// import './components/exercise6/styles.css';
// import './components/exercise7/styles.css';
// import Todo from './components/exercise9/Todo';
// import './App.css';

// Exercise 1
// function App() {
//   return (
//     <TransformToObjects />
//   );
// }

// Exercise 2
// function App() {
//   return (
//     <div>
//       <h1>Exercise done!</h1>
//       <p>Practicing React...</p>
//     </div>
//   );
// }

// Exercise 3
// function App() {
//   return (
//     <div>
//       <p>Todo: solve exercise</p>
//       <ExerciseComponent />
//     </div>
//   );
// }

// Exercise 4
// function App() {
//   const products = [
//         {
//             title: 'Product 1', 
//             price: '10', 
//             description: 'First product'
//         },
//         {
//             title: 'Product 2', 
//             price: '20', 
//             description: 'Second product'
//         }
//         ];
//     return (
//         <div>
//             <h1>My Demo Shop</h1>
//             <Product title={products[0].title} price={products[0].price} description={products[0].description} />
//             <Product title={products[1].title} price={products[1].price} description={products[1].description} />
//         </div>
//     );
// }

// Exercise 5
// function App() {
//   const clickBookmark = () => {console.log('Stored!');}
//     return <button onClick={clickBookmark()}>Bookmark</button>;
// }

// Exercise 6
// function App() {
//   const [amount, setAmount] = React.useState('100');
    
//   const clickedHandler = () => {
//       setAmount('75');
//   };
    
//   return (
//     <div>
//       <p>${amount}</p>
//       <button onClick={clickedHandler}>Apply Discount</button>
//     </div>
//   );
// }

// Exercise 7
// function App() {
//   const [validMessage, setValidMessage] = useState('Invalid message');
  
//   function validMessageHandler(event) {
//       const message = event.target.message;
      
//       if (message.trim().length < 3) {
//       setValidMessage('Invalid message');
//       } else {
//       setValidMessage('Valid message');
//       }
//   }

//   return (
//       <form>
//           <label>Your message</label>
//           <input type="text" onChange={validMessageHandler} />
//           <p>{validMessage}</p>
//           {/* validMessage will output invalid or valid message */}
//       </form>
//   );
// }

// Exercise 8
// function App() {
//   const [counter, setCounter] = React.useState(0);
  
//   function incrementCounterHandler() {
//       setCounter(prevCounter => prevCounter + 1)
//   }
//   return (
//     <div>
//       <p id="counter">{counter}</p>
//       <button onClick={incrementCounterHandler}>Increment</button>
//     </div>
//   );
// }

// // Exercise 9
// const DUMMY_TODOS = [
//   'Learn React',
//   'Practice React',
//   'Profit!'
// ];

// function App() {
//   return (
//       <ul>
//         {DUMMY_TODOS.map(todoItem => <Todo text={todoItem} />)}
//       </ul>
//   );
// }


// // Exercise 10
// function App() {
//     const [deleting, setDeleting] = React.useState(false);
    
//     function deletingHandler() {
//         setDeleting(true);
//     }
    
//     function proceedHandler() {
//         setDeleting(false);
//     }
    
//     let alerting;
    
//     if (deleting) {
//         alerting = (
//             <div id="alert">
//             <h2>Are you sure?</h2>
//             <p>These changes can't be reverted!</p>
//           <button onClick={proceedHandler}>Proceed</button>
//         </div>
//             )
//     }
    
//     return (
//       <div>
//         {alerting}
//          {/* <div id="alert">
//            <h2>Are you sure?</h2>
//            <p>These changes can't be reverted!</p>
//            <button onClick={proceedHandler}>Proceed</button>
//          </div> */}
//         <button onClick={deletingHandler}>Delete</button>
//       </div>    
//     );
// }

// // Exercise 11
// function App() {
//   const [highlighted, setHighlighted] = React.useState(false);
  
  
//   function clickHandler() {
//       setHighlighted(isHighlighted => !isHighlighted);
//   }
  
//   return (
//       <div>
//           <p style={{color:highlighted ? 'red' : 'white'}}>Style me!</p>
//           <button onClick={clickHandler}>Toggle style</button>
//       </div>
//   );
// }

// // Exercise 12
// function App() {
//   const [highlighted, setHighlighted] = React.useState(false);
  
  
//   function clickHandler() {
//       setHighlighted(isHighlighted => !isHighlighted);
//   }
  
//   return (
//       <div>
//           <p className={highlighted ? 'active' : ''}>Style me!</p>
//           <button onClick={clickHandler}>Toggle style</button>
//       </div>
//   );
// }

// // Exercise 13
// function App() {
//   const clickHandler = () => {
//       console.log('Clicked!');
//   };
  
//   return (
//       <div>
//         <h2>You're logged in!</h2>
//         <p>Welcome to your user profile!</p>
//         <button onClick={clickHandler}>Click me!</button>
//       </div>
//   );
// }

export default App;