// "use client";

import { SpinButton, SpinButtonOnChangeData } from '@fluentui/react-components';
import React, { useContext } from 'react';
import { ColorContext } from './ColorContext';

export const BlueSelector: React.FunctionComponent = () => {
  const {b, setB} = useContext<ColorPlusSetter>(ColorContext);
  const onChangeBlue = React.useCallback((_: React.SyntheticEvent<HTMLElement>, data?: SpinButtonOnChangeData) => {
    if (data != undefined && data.value !== undefined) {
      setB(data.value ?? 0);
    } else if (data != undefined && data.displayValue !== undefined) {
      const newValue = parseInt(data.displayValue);
      if (!Number.isNaN(newValue)) {
        setB(data.value ?? 0);
      } else {
        console.error(`Cannot parse "${data.displayValue}" as a number.`);
      }
    }
}, [setB]);
  return (<SpinButton min={0} max={255} step={1} value={b} onChange={onChangeBlue} />);
};
