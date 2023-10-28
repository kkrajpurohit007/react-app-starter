import React from 'react';
import './App.css';
import { Dashboard } from './pages/Dashboard';
import { Tasklist } from './pages/Task/TaskList';
import { Login } from './pages/Login/Login';
import { LoginLayout } from './components/Layout/LoginLayout';


function App() {
  return (
    <div className="App">
      <LoginLayout>
      <header className="App-header">
        Wel come to Kamal Dashboard
        <Login></Login>
        <Dashboard></Dashboard>
        <Tasklist></Tasklist>
      </header>
      </LoginLayout>
    </div>
  );
}

export default App;
