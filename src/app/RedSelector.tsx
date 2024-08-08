// "use client";

import { SpinButton, SpinButtonOnChangeData } from '@fluentui/react-components';
import React from 'react';
import { useRecoilState } from 'recoil';
import { red } from '../atoms';

export const RedSelector: React.FunctionComponent = () => {
  const [redColor, setRedColor] = useRecoilState<number>(red);
  const onChangeRed = React.useCallback((_: React.SyntheticEvent<HTMLElement>, data?: SpinButtonOnChangeData) => {
    if (data != undefined && data.value !== undefined) {
      setRedColor(data.value ?? 0);
    } else if (data != undefined && data.displayValue !== undefined) {
      const newValue = parseInt(data.displayValue);
      if (!Number.isNaN(newValue)) {
        setRedColor(data.value ?? 0);
      } else {
        console.error(`Cannot parse "${data.displayValue}" as a number.`);
      }
    }
}, [setRedColor]);
  return (<SpinButton min={0} max={255} step={1} value={redColor} onChange={onChangeRed} />);
};
