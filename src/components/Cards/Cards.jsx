import React from 'react';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import styles from './Cards.module.css';

const Cards = ({ data: {matches} }) => {
    if (!matches){
        return 'loading';
    }
    const arraymatches = matches.map(item => {
        console.log(item);
    });
    return (
        <div className={styles.container}>
            <Grid container spacing={4} justify="center">

                <Grid item component={Card}>
                   <CardContent>
                       <Typography color="textSecondary" gutterBottom>vvv</Typography>
                       <Typography variant="h5"> bbb </Typography>
                       <Typography variant="body2"> ccccccccccccccccccccc vvvvvvvvvvvvvvvvvv </Typography>
                   </CardContent>
                </Grid>

                <Grid item component={Card}>
                   <CardContent>
                       <Typography color="textSecondary" gutterBottom> aaa </Typography>
                       <Typography variant="h5"> bbb </Typography>
                       <Typography variant="body2"> ccccccccccccccccccccc vvvvvvvvvvvvvvvvvv </Typography>
                   </CardContent>
                </Grid>

                <Grid item component={Card}>
                   <CardContent>
                       <Typography color="textSecondary" gutterBottom> aaa </Typography>
                       <Typography variant="h5"> bbb </Typography>
                       <Typography variant="body2"> ccccccccccccccccccccc vvvvvvvvvvvvvvvvvv </Typography>
                   </CardContent>
                </Grid>
                
                <Grid item component={Card}>
                   <CardContent>
                       <Typography color="textSecondary" gutterBottom> aaa </Typography>
                       <Typography variant="h5"> bbb </Typography>
                       <Typography variant="body2"> ccccccccccccccccccccc vvvvvvvvvvvvvvvvvv </Typography>
                   </CardContent>
                </Grid>
            </Grid>
        </div>
    )
}
export default Cards;