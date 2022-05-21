import React from 'react'
import classes from './QuizList.module.css'
import { Link } from 'react-router-dom'


const QuizList = (props) => {
    // function setUsers() {

    //     console.log(props.users);
    //     props.users.forEach((user, index) => {
    //         return (
    //             <li key={index} id={user.id}>{user.name}</li>
    //         )
    //     })
    // }

    return (
        <div className={classes.QuizList}>
            <div>
                <h1>QuizList</h1>
                <ul>
                    {[1, 2, 3].map((quiz, index) => {
                        return (
                            <li key={index}>
                                <Link to={'/quiz/' + quiz}>Quiz {quiz}</Link>
                            </li>
                        )
                    })}
                </ul>

                <h2>Users list</h2>
                <ul>

                    {props.users
                        ?
                        props.users.map((user, index) => {
                            return (
                                <li key={index} id={user.id}>{user.name}</li>
                            )
                        })
                        : null}

                </ul>
            </div>
        </div>
    )
}

export default QuizList