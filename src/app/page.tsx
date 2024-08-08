"use client";

import React from 'react';
import { RecoilRoot } from 'recoil';
import { RedSelector } from './RedSelector';
import { GreenSelector } from './GreenSelector';
import { BlueSelector } from './BlueSelector';
import { HexText } from './HexText';
import './page.css';

const App: React.FunctionComponent = () => (
    <RecoilRoot>
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
  </RecoilRoot>
  );

export default App;
