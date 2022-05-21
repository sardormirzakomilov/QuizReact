import React from 'react'
import classes from './ActiveQuizList.module.css'
import AnswerItem from './AnswerItem/AnswerItem'

const ActiveQuizList = (props) => {
    return (
        <ul className={classes.AnswersList}>  {/* Variantlar */}

            {props.answers.map((answer, index) => {
                return (
                    <AnswerItem key={index} text={answer.text} id={answer.id} onClick={props.onClick} state={props.state ? props.state[answer.id] : null} /> // {[answerId]: 'error' 'success'}
                )
            })}

        </ul>
    )
}

export default ActiveQuizList   