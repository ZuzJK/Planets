import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import Nav from './Nav/Nav';
import Menu from '../Menu/Menu';
import styles from './Header.module.scss';

const Header = () => {
    const [isOpen,setIsOpen] = useState(false);
    const handleClick = () => setIsOpen(!isOpen);
    let location = useLocation();

    useEffect(() => {
        setIsOpen(false);
      }, [ location ]);
    return (
        <header className={`${styles.flex} ${styles.header}`}>
            {
                <NavLink to="/">
                    <h1 className={styles.lead}>The planets</h1>
                </NavLink>
            }
            <Menu 
                isOpen={isOpen} 
                clickFn={handleClick}
                />
            <Nav isOpen={isOpen} />

        </header>
    );
};

export default Header;