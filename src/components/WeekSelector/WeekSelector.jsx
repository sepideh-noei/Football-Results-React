import React, {useState, useEffect} from 'react';
import { NativeSelect, FormControl } from '@material-ui/core';
import styles from './WeekSelector.module.css';
import { fetchWeek } from '../../api';

const WeekSelector = ({handleWeekChange}) => {

    const [fetchedWeek , setfetchedWeek] = useState([]);

    useEffect (() => {
        const fetchAPI = async () => {
            setfetchedWeek(await fetchWeek());
        }
          fetchAPI();
    }, [setfetchedWeek]);
     
    return (
        <FormControl className={styles.controlstyle}>
            <NativeSelect defaultValue="" onChange={(e) => handleWeekChange(e.target.value)} className={styles.dropdown}>       
                <option value={0}>all Week</option>
                {!!fetchedWeek &&  fetchedWeek.map((matchday , index) => {
                    if (index < 38)
                    return (
                    <>
                    <option key={index} value={index+1}> {index+1} </option>
                    </>
                    )})}
            </NativeSelect>
        </FormControl>

    )
}
export default WeekSelector;