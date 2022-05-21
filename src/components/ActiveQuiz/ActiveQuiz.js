import React from 'react'
import classes from './ActiveQuiz.module.css'
import ActiveQuizList from './ActiveQuizList/ActiveQuizList'

const ActiveQuiz = (props) => {
    return (
        <div className={classes.ActiveQuiz}>
            <p className={classes.Question}>
                {/* Savollar bo'ladi */}
                <span>  {/* Savol */}
                    <strong>{props.activeQuestion}. </strong>
                    {props.question}
                </span>

                <small>{props.activeQuestion} in {props.quizLength}</small>
                {/* Nechta savoldan nechinchisi */}
            </p>

            <ActiveQuizList
                answers={props.answers}
                onClick={props.onClick}
                state={props.state} // null // {'error', 'success'}
            />

        </div>
    )
}

export default ActiveQuiz