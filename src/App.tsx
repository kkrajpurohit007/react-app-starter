import React from 'react';
import './App.css';
import { Dashboard } from './pages/Dashboard';
import { Tasklist } from './pages/Task/TaskList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Wel come to Kamal Dashboard
        <Dashboard></Dashboard>
        <Tasklist></Tasklist>
      </header>
    </div>
  );
}

export default App;
