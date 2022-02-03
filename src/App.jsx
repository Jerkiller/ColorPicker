import React from 'react';
import { RecoilRoot } from 'recoil';
import { RedSelector } from './RedSelector';
import { BlueSelector } from './BlueSelector';
import { GreenSelector } from './GreenSelector';
import { HexText } from './HexText';
import './App.css';

export const App = () => (
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
