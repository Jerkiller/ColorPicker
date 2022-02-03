import React from 'react';

import { SpinButton } from '@fluentui/react/lib/SpinButton';
import './App.css';

function App() {
  const spinnerStyle = {
    spinButtonWrapper: { width: 75 },
    root: {
      width: 'unset',
      marginRight: '1em',
    },
  };

  const [colors, setColors] = React.useState({
    r: 50, g: 50, b: 50,
  });

  const toHex = (rgb) => {
    let hex = Number(rgb).toString(16);
    if (hex.length < 2) {
      hex = `0${hex}`;
    }
    return hex;
  };

  const currentHex = () => `#${toHex(colors.r)}${toHex(colors.g)}${toHex(colors.b)}`;
  return (
    <div className="app">
      <div className='spinners'>
        <SpinButton
          label="Red"
          defaultValue="50"
          min={0}
          max={255}
          step={1}
          value={colors.r}
          onChange={(_, v) => { setColors({ ...colors, r: v }); }}
          styles={spinnerStyle}
        />
        <SpinButton
          label="Green"
          defaultValue="50"
          min={0}
          max={255}
          step={1}
          value={colors.g}
          onChange={(_, v) => { setColors({ ...colors, g: v }); }}
          styles={spinnerStyle}
        />
        <SpinButton
          label="Blue"
          defaultValue="50"
          min={0}
          max={255}
          step={1}
          value={colors.b}
          onChange={(_, v) => { setColors({ ...colors, b: v }); }}
          styles={spinnerStyle}
        />
      </div>
      <div className='result'>
        <h1 style={{ color: currentHex() }}>{currentHex()}</h1>
      </div>
    </div>
  );
}

export default App;
