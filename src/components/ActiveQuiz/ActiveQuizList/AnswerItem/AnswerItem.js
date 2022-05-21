import React from 'react'
import classes from './AnswerItem.module.css'

const AnswerItem = ({ text, id, onClick, state }) => {
    const cls = [classes.AnswerItem]

    if (state) { // {[answerId]: 'error' 'success'}
        cls.push(classes[state])
    }

    return (
        <li className={cls.join(' ')} id={id} onClick={() => { onClick(id) }}>
            {text}
        </li>
    )
}

export default AnswerItem