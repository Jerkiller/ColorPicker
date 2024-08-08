// "use client";

import { SpinButton, SpinButtonOnChangeData } from '@fluentui/react-components';
import React from 'react';
import { useRecoilState } from 'recoil';
import { blue } from '../atoms';

export const BlueSelector: React.FunctionComponent = () => {
  const [blueColor, setBlueColor] = useRecoilState<number>(blue);
  const onChangeBlue = React.useCallback((_: React.SyntheticEvent<HTMLElement>, data?: SpinButtonOnChangeData) => {
    if (data != undefined && data.value !== undefined) {
      setBlueColor(data.value ?? 0);
    } else if (data != undefined && data.displayValue !== undefined) {
      const newValue = parseInt(data.displayValue);
      if (!Number.isNaN(newValue)) {
        setBlueColor(data.value ?? 0);
      } else {
        console.error(`Cannot parse "${data.displayValue}" as a number.`);
      }
    }
}, [setBlueColor]);
  return (<SpinButton min={0} max={255} step={1} value={blueColor} onChange={onChangeBlue} />);
};
