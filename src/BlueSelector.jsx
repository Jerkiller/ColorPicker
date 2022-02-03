import { SpinButton } from '@fluentui/react';
import React from 'react';
import { ColorContext } from './ColorContext';
import { spinnerStyle } from './spinnerStyles';

export const BlueSelector = () => (
  <ColorContext.Consumer>
    {({ b, setB }) => (
      <SpinButton
        label="blue"
        defaultValue="50"
        min={0}
        max={255}
        step={1}
        styles={spinnerStyle}
        value={b}
        onChange={(_, v) => { setB(v); }}
      />
    )}
  </ColorContext.Consumer>
);
