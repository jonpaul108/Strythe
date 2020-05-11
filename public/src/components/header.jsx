import React from 'react';
import styles from '../styles/header.module.scss';
import {
    BrowserRouter, 
    NavLink
} from 'react-router-dom';

const Header = ({setPage}) => {
    return (
            <div>
                <ul>
                    <li>
                        <NavLink to='/home'>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to='/play'>Game</NavLink>
                    </li>
                    <li>
                        <NavLink to='/about'>About</NavLink>
                    </li>
                </ul>
            </div>
    )
}

export default Header;