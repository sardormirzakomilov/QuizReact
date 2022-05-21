import React from 'react'
import classes from './Popup.module.css'

const Popup = (props) => <div className={classes.Popup} onClick={props.onClose}></div>

export default Popup