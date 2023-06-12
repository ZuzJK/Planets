import React from 'react';
import styles from './BasicData.module.scss';

interface IBasicData {
    name:string | undefined,
    content: string,  
}
const BasicData = ({name ="No Planet", content}: IBasicData) => 
            <article className={styles.text}>
                <h2 className={styles.title}>{name}</h2>
                <p>
                    {
                        content
                    }
                </p>
            </article>

export default BasicData;