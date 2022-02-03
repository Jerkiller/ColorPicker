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

  // eslint-disable-next-line no-unused-vars
  const toHex = (rgb) => {
    let hex = Number(rgb).toString(16);
    if (hex.length < 2) {
      hex = `0${hex}`;
    }
    return hex;
  };

  return (
    <div className="app">
      <div className='spinners'>
        <SpinButton
          label="Red"
          defaultValue="50"
          min={0}
          max={255}
          step={1}
          styles={spinnerStyle}
        />
        <SpinButton
          label="Green"
          defaultValue="50"
          min={0}
          max={255}
          step={1}
          styles={spinnerStyle}
        />
        <SpinButton
          label="Blue"
          defaultValue="50"
          min={0}
          max={255}
          step={1}
          styles={spinnerStyle}
        />
      </div>
      <div className='result'>
        <h1 style={{ color: 'red' }}>RED</h1>
      </div>
    </div>
  );
}

export default App;
