// src/App.js
import React from 'react';
import Event from './Event'
import Brand from './Brand'
import Car from './Car';  // Import your Car component

function App() {
    return (
        <div>
            <Car />
            <Event />
            <Brand brand="Mercedes(E-Series)" />
        </div>
    );
}

export default App;