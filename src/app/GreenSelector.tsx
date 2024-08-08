// "use client";

import { SpinButton, SpinButtonOnChangeData } from '@fluentui/react-components';
import React from 'react';
import { useRecoilState } from 'recoil';
import { green } from '../atoms';

export const GreenSelector: React.FunctionComponent = () => {
  const [greenColor, setGreenColor] = useRecoilState<number>(green);
  const onChangeGreen = React.useCallback((_: React.SyntheticEvent<HTMLElement>, data?: SpinButtonOnChangeData) => {
    if (data != undefined && data.value !== undefined) {
      setGreenColor(data.value ?? 0);
    } else if (data != undefined && data.displayValue !== undefined) {
      const newValue = parseInt(data.displayValue);
      if (!Number.isNaN(newValue)) {
        setGreenColor(data.value ?? 0);
      } else {
        console.error(`Cannot parse "${data.displayValue}" as a number.`);
      }
    }
}, [setGreenColor]);
  return (<SpinButton min={0} max={255} step={1} value={greenColor} onChange={onChangeGreen} />);
};
