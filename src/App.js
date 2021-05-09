import React from 'react';
import {Cards , WeekSelector} from './components';
import styles from './App.module.css';

class App extends React.Component {
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
