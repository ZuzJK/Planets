import React from 'react';
import styles from './StatisticsItem.module.scss';

interface IStatisticsItem {
    data: {
        title: string,
    }
}
const StatisticsItem = ({data = {title: 'No data'}}: IStatisticsItem) => {
    return (
        <article className={styles.card}>
            <h3 className={styles.title}>{data.title}</h3>
            <p className={styles.content}>
                {
                    Object.values(data).pop()
                }
            </p>
        </article>
    );
};

export default StatisticsItem;