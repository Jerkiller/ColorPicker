"use client";

import React from 'react';

import { SpinButton, SpinButtonOnChangeData } from '@fluentui/react-components';;
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
  const [colors, setColors] = React.useState<Color>({
    r: 50, g: 50, b: 50,
  });
  
  const onChangeRed = React.useCallback((_: React.SyntheticEvent<HTMLElement>, data?: SpinButtonOnChangeData) => {
      if (data != undefined && data.value !== undefined) {
        setColors({ ...colors, r: Number(data.value) });
      } else if (data != undefined && data.displayValue !== undefined) {
        const newValue = parseInt(data.displayValue);
        if (!Number.isNaN(newValue)) {
          setColors({ ...colors, r: Number(data.value) });
        } else {
          console.error(`Cannot parse "${data.displayValue}" as a number.`);
        }
      }
  }, [colors]);
  
  const onChangeGreen = React.useCallback((_: React.SyntheticEvent<HTMLElement>, data?: SpinButtonOnChangeData) => {
    if (data != undefined && data.value !== undefined) {
      setColors({ ...colors, g: Number(data.value) });
    } else if (data != undefined && data.displayValue !== undefined) {
      const newValue = parseInt(data.displayValue);
      if (!Number.isNaN(newValue)) {
        setColors({ ...colors, g: Number(data.value) });
      } else {
        console.error(`Cannot parse "${data.displayValue}" as a number.`);
      }
    }
}, [colors]);
  
const onChangeBlue = React.useCallback((_: React.SyntheticEvent<HTMLElement>, data?: SpinButtonOnChangeData) => {
  if (data != undefined && data.value !== undefined) {
    setColors({ ...colors, b: Number(data.value) });
  } else if (data != undefined && data.displayValue !== undefined) {
    const newValue = parseInt(data.displayValue);
    if (!Number.isNaN(newValue)) {
      setColors({ ...colors, b: Number(data.value) });
    } else {
      console.error(`Cannot parse "${data.displayValue}" as a number.`);
    }
  }
}, [colors]);
  return (
    <div className="app">
      <div className='spinners'>
        <SpinButton min={0} max={255} step={1} value={colors.r} onChange={onChangeRed} />
        <SpinButton min={0} max={255} step={1} value={colors.g} onChange={onChangeGreen} />
        <SpinButton min={0} max={255} step={1} value={colors.b} onChange={onChangeBlue} />
      </div>
      <div className='result'>
        <h1 style={{ color: currentHex(colors) }}>{currentHex(colors)}</h1>
      </div>
    </div>
  );
}

export default App;
