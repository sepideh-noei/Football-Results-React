import React from 'react';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import styles from './Cards.module.css';
import cx from 'classnames';

const Cards = ({ data: {matches} }) => {
    if (!matches){
        return 'loading';
    }

    return (
        <div className={styles.container}>
            <Grid container justify="center">
            {!!matches && matches.map((item , index) => {
                console.log(item)
                return (
                    <Grid key={index} item component={Card} xs={12} md={12} className={cx(styles.card)}>
                    <CardContent className={cx(styles.date)}>
                        <Typography color="textSecondary" gutterBottom >  week{item.matchday} - </Typography>
                        <Typography color="textSecondary" gutterBottom > - {new Date(item.utcDate).toDateString()} </Typography>
                    </CardContent>
                    
                    <CardContent >
                        <Typography className={cx(styles.status)} variant="body2" gutterBottom> {item.status} </Typography>
                        <Typography  color="textPrimary" gutterBottom> {item.homeTeam.name} </Typography>
                        <Typography  color="textPrimary" gutterBottom> {item.awayTeam.name} </Typography>
                        <Typography variant="body2" gutterBottom> {item.score.fullTime.homeTeam} </Typography>
                        <Typography variant="body2" gutterBottom> {item.score.fullTime.awayTeam} </Typography>
                    </CardContent>  
                    </Grid> 
                )
            })}               
            </Grid>
        </div>
    )
}
export default Cards;