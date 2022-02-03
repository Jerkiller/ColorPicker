import { SpinButton } from '@fluentui/react';
import React from 'react';
import { ColorContext } from './ColorContext';
import { spinnerStyle } from './spinnerStyles';

export const RedSelector = () => (
  <ColorContext.Consumer>
    {({ r, setR }) => (
      <SpinButton
        label="Red"
        defaultValue="50"
        min={0}
        max={255}
        step={1}
        styles={spinnerStyle}
        value={r}
        onChange={(_, v) => { setR(v); }}
      />
    )}
  </ColorContext.Consumer>

);
