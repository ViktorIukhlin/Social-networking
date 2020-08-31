import React from 'react';
import s from './Nav.module.css';

const Nav = () => {
    return (
        <nav className={s.nav}>
            <a className={s.link} href="./profile"> Profile </a>
            <a className={s.link} href="./messages"> Messages </a>
            <a className={s.link} href="./news"> News </a>
            <a className={s.link} href="./music"> Music </a>
            <a className={s.link} href="./settings"> Settings </a>
        </nav>
    )
}

export default Nav;