import React from 'react';
import {Cards , WeekSelector} from './components';
import styles from './App.module.css';
import {fetchData} from './api';


class App extends React.Component {
 async componentDidMount(){
   const data = await fetchData ();
   console.log(data);
 }
  
  render() {
    return (
    <div className={styles.container}>
      <WeekSelector />
      <Cards />
    </div>
    )
  }
}

export default App
