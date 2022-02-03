import React, { useState } from 'react';
import { RedSelector } from './RedSelector';
import { BlueSelector } from './BlueSelector';
import { GreenSelector } from './GreenSelector';
import { HexText } from './HexText';
import './App.css';
import { ColorContext } from './ColorContext';

export const App = () => {
  const [colors, setColors] = useState({ r: 25, g: 25, b: 25 });
  return (
    <ColorContext.Provider value={{
      ...colors,
      setR: (v) => { setColors({ ...colors, r: v }); },
      setG: (v) => { setColors({ ...colors, g: v }); },
      setB: (v) => { setColors({ ...colors, b: v }); },
    }}
    >
      <div className="app">
        <div className='spinners'>
          <RedSelector />
          <GreenSelector />
          <BlueSelector />
        </div>
        <div className='result'>
          <HexText />
        </div>
      </div>
    </ColorContext.Provider>
  );
};
