import React from 'react';
import {Cards , WeekSelector} from './components';
import styles from './App.module.css';
import {fetchData} from './api';


class App extends React.Component {
  state = {
    data: {},
  }

 async componentDidMount(){
  const fetchedData = await fetchData();
  this.setState ({data:fetchedData})
 }
  
  render() {
    const {data} = this.state;

    return (
    <div className={styles.container}>

      <WeekSelector />
      <Cards data={data} />
      
    </div>
    )
  }
}

export default App
