import React, { useState } from 'react';
import Card from '../UI/Card';
// ../ is going out of User folder to the component folder
import classes from './AddUser.module.css';
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';

const AddUser = props => {
    // useState is a React Hook that adds state to a functional Component. It returns an array with two values [the current state, a function to update it] The Hook takes the initial state value as an argument and returns the updated value whenever the setter function is called
    const [enteredUsername, setEnteredUsername] = useState('');
    const [enteredAge, setEnteredAge] = useState('');
    // there are strings in useState because the starting state will have no input and it will be empty
    const [error, setError] = useState();

    // event is an object
    const addUserHandler = (event) => {
        event.preventDefault();
        if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
            setError({
                title: 'Invalid input',
                message: 'Please enter a valid name and age (non-empty values).'
            });
            return;
        }
        if (+enteredAge < 1) {
            setError({
                title: 'Invalid input',
                message: 'Please enter a valid age (> 0).'
            });
            return;
        }
        // console.log(enteredUsername, enteredAge);
        props.onAddUser(enteredUsername, enteredAge);
        setEnteredUsername('');
        setEnteredAge('');
    };

    // the setEnteredUsername function will update the value if there is a username inputted
    const usernameChangeHandler = (event) => {
        setEnteredUsername(event.target.value);
    };

    const ageChangeHandler = (event) => {
        setEnteredAge(event.target.value);
    };

    const errorHandler = () => {
        setError(null);
    };

    return (
        <div>
            {/* Errormodal will only be outputted if there is an error */}
            {error && (
                <ErrorModal 
                    title={error.title} 
                    message={error.message}
                    onConfirm={errorHandler} 
                />
            )}
            <Card className={classes.input} onClick={props.onConfirm}>
                <form onSubmit={addUserHandler}>
                    <label htmlFor="username">Username</label>
                    <input 
                        id="username" 
                        type="text" 
                        value={enteredUsername} 
                        onChange={usernameChangeHandler}
                    />

                    <label htmlFor="age">Age (Years)</label>
                    <input 
                        id="age" 
                        type="number" 
                        value={enteredAge} 
                        onChange={ageChangeHandler} 
                    />
                    <Button type="submit">Add User</Button>
                </form>
            </Card>
        </div>
    );
}

export default AddUser;