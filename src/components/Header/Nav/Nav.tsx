import NavItem from './NavItem/NavItem';
import styles from './Nav.module.scss';

interface INav {
    isOpen: boolean
}
const Nav = ({isOpen}: INav) => {

    const planets = ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune'];
    return (
        <nav className={isOpen?`${styles.nav} ${styles.navOpen}`:`${styles.nav}`}>
            <ul 
                className={styles.navList} 
                id="Main-menu">
                {
                    planets.map(item => 
                        <NavItem item={item} key={item} />
                    )
                }
            </ul>
        </nav>
    );
};

export default Nav;