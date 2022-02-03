import { SpinButton } from '@fluentui/react';
import React from 'react';
import { useRecoilState } from 'recoil';
import { green } from './atoms';
import { spinnerStyle } from './spinnerStyles';

export const GreenSelector = () => {
  const [greenColor, setGreenColor] = useRecoilState(green);
  return (
    <SpinButton
      label="green"
      defaultValue="50"
      min={0}
      max={255}
      step={1}
      styles={spinnerStyle}
      value={greenColor}
      onChange={(_, r) => { setGreenColor(r); }}
    />
  );
};
