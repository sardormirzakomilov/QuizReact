import React, { useState } from 'react'
import Drawer from '../../components/Navigation/Drawer/Drawer'
import MenuBar from '../../components/UI/MenuBar/MenuBar'
import classes from './Layout.module.css'


const Layout = (props) => {
    const [icon, setIcon] = useState({
        menuOpen: false
    })

    const toggleHandler = () => {
        setIcon({
            menuOpen: !icon.menuOpen
        })
    }

    const closeHandler = () => {
        setIcon({
            menuOpen: false
        })
    }

    return (
        <div className={classes.Layout}>
            <Drawer isOpen={icon.menuOpen} onClose={closeHandler}/>
            <MenuBar isOpen={icon.menuOpen} onToggle={toggleHandler}  />
            <main>
                {props.children}
            </main>
        </div>
    )
}

export default Layout