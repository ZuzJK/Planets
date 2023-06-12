import styles from './Home.module.scss';
import EarthImg from '../../assets/planet-earth.svg';

const Home = () => 
        <div className={styles.flex}>
            <article>
                <h2 className={styles.title}>Solar system planets page</h2>
                <p>
                    Go to see information about a planet doing click on one of the options links
                </p>
            </article>
            <img className={styles.planet} src={EarthImg} alt='' />
        </div>

export default Home;