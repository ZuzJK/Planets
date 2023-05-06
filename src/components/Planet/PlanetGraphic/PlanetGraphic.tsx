import React from 'react';
import { planetImg } from '../../../data/PlanetsImages';
import styles from './PlanetGraphic.module.scss';

interface IPlanetGraphic {
    planetName: string | undefined,
    typeImg?: string,
}
const PlanetGraphic = ({planetName, typeImg = 'overview'}:IPlanetGraphic) => {
    const planet = planetImg.find(({name}) => name === planetName);

    return (
            <figure className={styles.a}>
                <img 
                    src={typeImg==='structure'?planet?.img.structure:planet?.img.content} 
                    alt='' 
                    className={styles.image}
                />
                {
                    typeImg === 'geology' && <img className={styles.b} src={planet?.img.geology} alt='' />
                }
            </figure>

         
    );
};

export default PlanetGraphic;