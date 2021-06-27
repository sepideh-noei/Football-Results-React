import React, {useEffect, useState} from 'react';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import styles from './Cards.module.css';
import cx from 'classnames';
import { fetchData } from '../../api';

const Cards = ({ data: {matches} }) => {

    if (!matches){
        return 'loading';
    }

    return (
        <div className={styles.container}>
            <Grid container justify="center">
            {!!matches && matches.map((item , index) => {
                return (
                    <Grid key={index} item component={Card} xs={12} md={12} className={cx(styles.card)}>
                        
                    <CardContent>
                        <Typography className={cx(styles.date)} color="textSecondary" gutterBottom > 
                             week{item.matchday} - {new Date(item.utcDate).toDateString()} 
                        </Typography>
                        <Typography className={cx(styles.statusstyle)} variant="body2" color="textSecondary"> {item.status} </Typography>
                    </CardContent>

                    <CardContent className={cx(styles.goals)}>
                        <Typography className={cx(styles.team1)} variant="h6"> {item.homeTeam.name} </Typography>
                        <Typography variant="h6" gutterBottom>
                                  {item.score.fullTime.homeTeam} 0 - 0 {item.score.fullTime.awayTeam}     
                        </Typography>
                        <Typography className={cx(styles.team2)} variant="h6"> {item.awayTeam.name} </Typography>
                    </CardContent>
                   
                    <CardContent>
                        <Typography className={cx(styles.refereestyle)}  color="textPrimary" variant="body2" gutterBottom> "The name of the referee of the match" {item.referees.name} </Typography>
                    </CardContent>  
                    
                    </Grid> 
                )
            })}               
            </Grid>
        </div>
    )
}
export default Cards;