import React from 'react';
import './App.css'
import { Outlet, Link } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <header>
        <h1>Surway</h1>
        <nav>
          <Link to="/">Home</Link> | <Link to="/survey-builder">Survey Builder</Link>
        </nav>
      </header>

      <main>
        {/* This is where the routed components will be rendered */}
        <Outlet />
      </main>
    </div>
  );
};

export default App;
