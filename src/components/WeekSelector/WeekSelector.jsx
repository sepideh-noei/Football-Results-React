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
     
    console.log(fetchedWeek);

   // for (let index = 0; index < fetchedWeek.length; index+=10) {
       // return fetchedWeek[index];  }

    return (

        <FormControl className={styles.controlstyle}>
            <NativeSelect defaultValue="" onChange={(e) => handleWeekChange(e.target.value)} className={styles.dropdown}>       
                <option value="global">all Week</option>
                {!!fetchedWeek &&  fetchedWeek.map((matchday , index) => 
                  <option key={index} value={matchday}> {matchday} </option>)};
            </NativeSelect>
        </FormControl>

    )
}
export default WeekSelector;