import { SpinButton } from '@fluentui/react';
import React from 'react';
import { ColorContext } from './ColorContext';
import { spinnerStyle } from './spinnerStyles';

export const GreenSelector = () => (
  <ColorContext.Consumer>
    {({ g, setG }) => (
      <SpinButton
        label="green"
        defaultValue="50"
        min={0}
        max={255}
        step={1}
        styles={spinnerStyle}
        value={g}
        onChange={(_, v) => { setG(v); }}
      />
    )}
  </ColorContext.Consumer>
);
