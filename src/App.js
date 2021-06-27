import React from 'react';
import {Cards , WeekSelector} from './components';
import styles from './App.module.css';
import {fetchData} from './api';



class App extends React.Component {
  state = {
    data: {},
    matchday: '',
  }

 async componentDidMount(){
  const fetchedData = await fetchData();
  this.setState ({data:fetchedData})
 }

 handleWeekChange = async(matchday) => {

  const fetchedData = await fetchData(matchday);

   console.log(fetchedData);
   console.log(matchday);
 }
  
  render() {
    const {data} = this.state;
    return (
    <div className={styles.container}>

      <WeekSelector handleWeekChange={this.handleWeekChange}/>
      <Cards data={data} />
      
    </div>
    )
  }
}

export default App
