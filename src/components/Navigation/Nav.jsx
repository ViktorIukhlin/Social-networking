import React from 'react';
import s from './Nav.module.css';
import { NavLink } from 'react-router-dom';

const Nav = () => {
    return (
        <nav className={s.nav}>
            <NavLink className={s.link} activeClassName={s.active} to="./profile"> Profile </NavLink>
            <NavLink className={s.link} activeClassName={s.active} to="./messages"> Messages </NavLink>
            <NavLink className={s.link} activeClassName={s.active} to="./news"> News </NavLink>
            <NavLink className={s.link} activeClassName={s.active} to="./music"> Music </NavLink>
            <NavLink className={s.link} activeClassName={s.active} to="./settings"> Settings </NavLink>
        </nav>
    )
}

export default Nav;