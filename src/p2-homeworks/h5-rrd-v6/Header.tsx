import React from 'react'
import {NavLink} from 'react-router-dom';
import {PATH} from './Pages';
import './Header.css'

function Header() {
    return (
        <div>
            <input type="checkbox" id="nav-toggle"/>
            <label htmlFor="nav-toggle"><span></span></label>

            <ul className="b-menu">
                <li><NavLink className='link' to={PATH.PRE_JUNIOR}>PreJunior</NavLink></li>
                <li><NavLink className='link' to={PATH.JUNIOR}>Junior</NavLink></li>
                <li><NavLink className='link' to={PATH.JUNIOR_PLUS}>JuniorPlus</NavLink></li>
            </ul>
        </div>
    )
}

export default Header

/*
<NavLink to={PATH.PRE_JUNIOR}>Pre-junior</NavLink>
<NavLink to={PATH.JUNIOR}>Junior</NavLink>
<NavLink to={PATH.JUNIOR_PLUS}>Junior-plus</NavLink>*/
