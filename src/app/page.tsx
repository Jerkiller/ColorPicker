"use client";

import React from 'react';

import { SpinButton } from '@fluentui/react-components';;
import './page.css';

const toHex = (rgb: number) => {
  let hex = rgb.toString(16);
  if (hex.length < 2) {
    hex = `0${hex}`;
  }
  return hex;
};
const currentHex = (colors: Color) => `#${toHex(colors.r)}${toHex(colors.g)}${toHex(colors.b)}`;

const App: React.FunctionComponent = () => {

  return (
    <div className="app">
      <div className='spinners'>
        <SpinButton min={0} max={255} step={1} value={255} />
        <SpinButton min={0} max={255} step={1} value={0} />
        <SpinButton min={0} max={255} step={1} value={0} />
      </div>
      <div className='result'>
        <h1 style={{ color: currentHex({r: 255, g: 0, b: 0}) }}>{currentHex({r: 255, g: 0, b: 0})}</h1>
      </div>
    </div>
  );
}

export default App;
