import React from 'react';
import { NavLink } from 'react-router-dom';
import theme from '../../../../style/theme';
import styles from './NavItem.module.scss';

const NavItem = ({item}:{item: string}) => {

    return(
    <li key={item} className={styles.link}>
        <span  
                className={styles.planet}
                aria-hidden={true}
                data-planet={item}
                style={{
                    // @ts-ignore
                    backgroundColor:theme[item]}}
                >
            </span> 
            <NavLink 
                    to={`/planets/${item}/?category=overview`}
                    className={styles.a}>
                {item}
            </NavLink>
        </li>
)
            
};



export default NavItem;