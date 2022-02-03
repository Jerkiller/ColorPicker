import { SpinButton } from '@fluentui/react';
import React from 'react';
import { useRecoilState } from 'recoil';
import { red } from './atoms';
import { spinnerStyle } from './spinnerStyles';

export const RedSelector = () => {
  const [redColor, setRedColor] = useRecoilState(red);
  return (
    <SpinButton
      label="Red"
      defaultValue="50"
      min={0}
      max={255}
      step={1}
      styles={spinnerStyle}
      value={redColor}
      onChange={(_, r) => { setRedColor(r); }}
    />
  );
};
