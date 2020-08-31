import React from 'react';
import s from './Nav.module.css';

const Nav = () => {
    return (
        <nav className={s.nav}>
            <a className={s.link} href="./#"> Profile </a>
            <a className={s.link} href="./#"> Messages </a>
            <a className={s.link} href="./#"> News </a>
            <a className={s.link} href="./#"> Music </a>
            <a className={s.link} href="./#"> Settings </a>
        </nav>
    )
}

export default Nav;