import React, { useId } from 'react';
import styles from './OptionItem.module.scss';

interface IOptionItem {
    label: string,
    name: string,
    index: number,
    isMobile: boolean,
}
const OptionItem = ({label, name, index, isMobile} : IOptionItem) => {
    const id = useId();
    
    return (
        <div className={styles.flex}>
            <input 
                className={styles.radio}
                type="radio" 
                name={name} 
                value={label.toLowerCase().split(" ").at(-1)}
                id={id} 
                    />
            <label 
            className={styles.label}
             htmlFor={id}
             tabIndex={0}
             >
                <span aria-hidden="true">
                    {"0".concat(index.toString(),' ')} 
                </span> 
                {
                  isMobile ?  index % 2 ? label.split(" ")[0] : label.split(" ")[1] : label
                }
            </label>
            <p>{isMobile}</p>
        </div>
    );
};

export default OptionItem;