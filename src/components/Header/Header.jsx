//Header del sitio
import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faUser, faAddressCard, faMagnifyingGlass, faGamepad } from '@fortawesome/free-solid-svg-icons';
import './Header.scss';

const Header = (props) => {
    /* const { isAuthenticated, user } = auth; */
    /* const logoutUser = () => {
        logout();
        history.push('/');
    }; */
    /* const authLinks = (
        <ul className='navbar-nav ml-auto'>
        <li className='nav-item'>
            <Link className='nav-link' to='/cart'>
            <FontAwesomeIcon icon={faShoppingCart} />
            </Link>
        </li>
        <li className='nav-item'>
            <Link className='nav-link' to='/profile'>
            <FontAwesomeIcon icon={faUser} />
            </Link>
        </li>
        <li className='nav-item'>
            <a className='nav-link' href='#!' onClick={logoutUser}>
            Logout
            </a>
        </li>
        </ul>
    ); */
    const guestLinks = (
        <ul className='navbar-nav ml-auto'>
            <li className='nav-item'>
                <Link className='nav-link' to='/login'>
                    <FontAwesomeIcon className='NavList__item__link__icon' icon={faUser} />
                    Ingresar
                </Link>
            </li>
            <li className='nav-item'>
                <Link className='nav-link' to='/register'>
                    <FontAwesomeIcon className='NavList__item__link__icon' icon={faAddressCard} />
                    Registrarse
                </Link>
            </li>
        </ul>
    );

    const guestNav = (
        <ul className='NavList'>
            <li className='NavList__item'>
                <FontAwesomeIcon className='NavList__item__link__icon' icon={faGamepad} />
                <Link to='/games' className='NavList__item__link'>Xbox</Link>
            </li>
            <li className='NavList__item'>
                <FontAwesomeIcon className='NavList__item__link__icon' icon={faGamepad} />
                <Link to='/games' className='NavList__item__link'>PS4</Link>
            </li>
            <li className='NavList__item'>
                <FontAwesomeIcon className='NavList__item__link__icon' icon={faGamepad} />
                <Link to='/games' className='NavList__item__link'>Nintendo Switch</Link>
            </li>
            <li className='NavList__item'>
                <FontAwesomeIcon className='NavList__item__link__icon' icon={faGamepad} />
                <Link to='/games' className='NavList__item__link'>PC</Link>
            </li>
            <li className='NavList__item'>
                <FontAwesomeIcon className='NavList__item__link__icon' icon={faMagnifyingGlass} />
                <Link to='/search' className='NavList__item__link'>Buscar</Link>
            </li>
        </ul>
    );

    return (
        <header className='Header'>
            <div className='collapse navbar-collapse' id='navbarColor02'>
                {/* isAuthenticated ? authLinks : guestLinks */
                    guestLinks
                }
            </div>
            <Link className='Header-Logo' to='/'>
            DistriPlay
            </Link>
            {guestNav}
        </header>
    );
}

export default Header;