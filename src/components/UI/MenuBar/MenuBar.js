import React from 'react'
import classes from './MenuBar.module.css'

const MenuBar = (props) => {
    const cls = [
        'fa',
        classes.MenuBar
    ]

    if (props.isOpen) {
        cls.push('fa-times')
        cls.push(classes.open)
    } else {
        cls.push('fa-bars')
    }

    return (
        <i
            className={cls.join(' ')}
            onClick={props.onToggle}
        />
    )
}

export default MenuBar