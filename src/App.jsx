import React, { useState } from 'react';
import './App.css';
import ListItem from './components/ListItem';
import TaskManager from './components/TaskManager';
import Tasks from './components/Tasks';

function App() {
  const [selectedList, setSelectedList] = useState(null);
  
  const today = new Date();
  const nameDay = { weekday: 'long' };
  const nomeDoDia = today.toLocaleDateString('en-US', nameDay);
  const nameMonth = { month: 'long' };
  const nomeDoMes = today.toLocaleDateString('en-US', nameMonth);
  const day = today.getDate();
  const year = today.getFullYear();

  const handleSelectList = (list) => {
    setSelectedList(list);
  };

  return (
    <>
      <div className="main-container">
        <div className="sidebar">
          <Tasks onSelectList={handleSelectList} />
        </div>
        <div className="main">
          <div className="header-container">
            <h2>Have a Nice Day!</h2>
            <p>It's {nomeDoDia}, {day} {nomeDoMes} {year}</p>
          </div>

          <div className="main-content">
            <div className="tasks">
              <TaskManager itemList={selectedList} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
