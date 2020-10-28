import React from 'react';
import s from './Nav.module.css';
import { NavLink } from 'react-router-dom';
import Friends from '../Friends/Friends';

const Nav = (props) => {
    return (
        <nav className={s.nav}>
            <NavLink className={s.link} activeClassName={s.active} to="/profile"> Profile </NavLink>
            <NavLink className={s.link} activeClassName={s.active} to="/messages"> Messages </NavLink>
            <NavLink className={s.link} activeClassName={s.active} to="/news"> News </NavLink>
            <NavLink className={s.link} activeClassName={s.active} to="/music"> Music </NavLink>
            <NavLink className={s.link} activeClassName={s.active} to="/settings"> Settings </NavLink>
            <NavLink className={s.link} activeClassName={s.active} to="/users"> Users </NavLink>
            <Friends state={props.state} to="/users"/>
        </nav>
    )
}

export default Nav;