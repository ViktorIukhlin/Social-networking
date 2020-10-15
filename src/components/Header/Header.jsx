import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './Header.module.css'

const Header = (props) => {
    return (
        <header className={style.header}>
            <img src ='https://mpng.subpng.com/20180326/hqq/kisspng-phoenix-cygnini-symbol-logo-phoenix-5ab9b15872f4d3.5926073915221190004709.jpg' alt="logo"/>
            <div className={style.loginBlock}>
                {props.isAuth ? props.login : <NavLink to={'/login'}>Login</NavLink>}
                
            </div>
        </header>
    )
}

export default Header;