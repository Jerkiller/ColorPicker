import { SpinButton } from '@fluentui/react';
import React from 'react';
import { useRecoilState } from 'recoil';
import { blue } from './atoms';
import { spinnerStyle } from './spinnerStyles';

export const BlueSelector = () => {
  const [blueColor, setBlueColor] = useRecoilState(blue);
  return (
    <SpinButton
      label="blue"
      defaultValue="50"
      min={0}
      max={255}
      step={1}
      styles={spinnerStyle}
      value={blueColor}
      onChange={(_, r) => { setBlueColor(r); }}
    />
  );
};
