import React from 'react';
import StatisticsItem from './StatisticsItem/StatisticsItem';
import styles from './Statistics.module.scss';

interface IStatistics {
    data: {
        rotation: string,
        revolution: string,
        radius: string,
        temperature: string
    }
}

const Statistics = ({data: {rotation,
    revolution,
    radius,
    temperature}} : IStatistics) => {

    const planetFact = [
        {
            title: 'Rotation time',
            rotation 
        },
        {
            title: 'Revolution time',
            revolution
        },
        {
            title: 'Radius',
            radius
        },
        {
            title: 'Average Temp.',
            temperature
        }
        ];

    return (
        <section className={styles.flex}>
            {
                planetFact.map(item => <StatisticsItem data={item} key={item.title} />)
            }
        </section>
    );
};

export default Statistics;