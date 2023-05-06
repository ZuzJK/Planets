import React, { useState } from 'react';
import OptionItem from './OptionItem/OptionItem';
import styles from './SelectOption.module.scss';

interface ISelectionOption {
    clickFn(e:any): void,
}
const SelectOption = ({clickFn}: ISelectionOption) => {
    
    const categories = ['Overview', 'Internal structure', 'Surface Geology'];
    const [windowSize,setWindowSize] = useState(window.innerWidth);

    window.onresize = () => setWindowSize(window.innerWidth);
    return (
        <form 
            className={styles.container}
            onClick={clickFn}>
            {
                categories.map((item,i) => 
                <OptionItem   
                    label = {item}
                    name = 'planetDetails'
                    index = {i + 1}
                    key = {item}
                    isMobile = {windowSize<600?true:false}
                    />) 
            }
        </form>
    );
};

export default SelectOption;