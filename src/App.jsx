import React from 'react';

import { SpinButton } from '@fluentui/react/lib/SpinButton';
import './App.css';

function App() {
  return (
    <div className="App">
      <SpinButton
        label="Red"
        defaultValue="50"
        min={0}
        max={255}
        step={1}
      />
      <SpinButton
        label="Green"
        defaultValue="50"
        min={0}
        max={255}
        step={1}
      />
      <SpinButton
        label="Blue"
        defaultValue="50"
        min={0}
        max={255}
        step={1}
      />

    </div>
  );
}

export default App;
