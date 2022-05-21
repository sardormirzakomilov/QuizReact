import React, { Component } from 'react'
import classes from './Drawer.module.css'
import { Link } from 'react-router-dom'
import Popup from '../../UI/Popup/Popup'

const lists = [
    { to: '/auth', text: 'Auth' },
    { to: '/quizcreator', text: 'QuizCreator' },
    { to: '/', text: 'QuizList' },
]

class Drawer extends Component {
    renderList() {
        return lists.map((list, index) => {
            return <li key={index}>
                <Link to={list.to} onClick={this.props.onClose}>{list.text}</Link>
            </li>
        })
    }

    render() {
        const cls = [
            classes.Drawer,
            !this.props.isOpen ? classes['close'] : null
        ]

        return (
            <React.Fragment>
                <nav className={cls.join(' ')}>
                    <ul>
                        {this.renderList()}
                    </ul>
                </nav>
                {this.props.isOpen ? <Popup onClose={this.props.onClose} /> : null}
            </React.Fragment>
        )
    }
}

export default Drawer