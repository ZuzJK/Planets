import React from 'react';
import styles from './Menu.module.scss';

interface IMenu {
    isOpen: boolean,
    clickFn(): void
}

const Menu = ({isOpen, clickFn}: IMenu) => 
        <button 
            className={styles.button} 
            aria-label='Main menu'
            aria-expanded={isOpen} 
            aria-controls="Main-menu"
            onClick={clickFn}>
            <span className={isOpen?`${styles.line} ${styles.active}` :styles.line}></span>
        </button>

export default Menu;