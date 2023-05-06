import React, { useState, useEffect } from 'react';
import Statistics from './Statistics/Statistics';
import data from '../../data/data.json'
import { useParams, useSearchParams } from 'react-router-dom';
import SelectOption from '../SelectOption/SelectOption';
import BasicData from './BasicData/BasicData';
import PlanetGraphic from './PlanetGraphic/PlanetGraphic';
import styles from './Planet.module.scss';

interface IPlanetProps {
    setTheme(planetName: string): void
}

const Planet = ({setTheme}: IPlanetProps) => {
    const { name } = useParams();
    const [searchParams, setSearchParams] = useSearchParams();

    const [search,setSearch] = useState<any>(searchParams.get('category')||'overview');
    
    
    const handleClick = (e:any) => {
        if(e.target.value){
            setSearchParams({category:e.target.value});
        }
     
    };
    useEffect(()=>{
        if(name){
            setTheme(name)
        }
        
    },[name]);
    useEffect(()=>{
        if(searchParams) {
            setSearch(searchParams.get('category'))
        }
    },[searchParams]);

    const planetData = data.find(planet => planet.name === name);
    const { 
            rotation,
            revolution,
            radius,
            temperature,
            ...rest} : any = planetData;
    return (
        <main className={styles.flex}>
            <div className={styles.grid}>
                <SelectOption clickFn={handleClick} />
                <PlanetGraphic planetName={name} typeImg={search} />
                <BasicData 
                    name={name}
                    content={rest[search.toString()].content}
                    />
                <Statistics data={{rotation,
                    revolution,
                    radius,
                    temperature}}/>
            </div>
           
        </main>
    );
};

export default Planet;