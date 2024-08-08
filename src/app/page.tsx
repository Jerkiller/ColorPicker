"use client";

import React, { useState } from 'react';
import { RecoilRoot } from 'recoil';
import { RedSelector } from './RedSelector';
import { GreenSelector } from './GreenSelector';
import { BlueSelector } from './BlueSelector';
import { HexText } from './HexText';
import { ColorContext } from './ColorContext';
import './page.css';

const App: React.FunctionComponent = () => {
  const [colors, setColors] = useState<Color>({ r: 25, g: 25, b: 25 });
  return (
    <ColorContext.Provider value={{
      ...colors,
      setR: (v: number) => { setColors({ ...colors, r: v }); },
      setG: (v: number) => { setColors({ ...colors, g: v }); },
      setB: (v: number) => { setColors({ ...colors, b: v }); },
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
export default App;
