// "use client";

import { SpinButton, SpinButtonOnChangeData } from '@fluentui/react-components';
import React, { useContext } from 'react';
import { ColorContext } from './ColorContext';

export const RedSelector: React.FunctionComponent = () => {
  const {r, setR} = useContext<ColorPlusSetter>(ColorContext);
  const onChangeRed = React.useCallback((_: React.SyntheticEvent<HTMLElement>, data?: SpinButtonOnChangeData) => {
    if (data != undefined && data.value !== undefined) {
      setR(data.value ?? 0);
    } else if (data != undefined && data.displayValue !== undefined) {
      const newValue = parseInt(data.displayValue);
      if (!Number.isNaN(newValue)) {
        setR(data.value ?? 0);
      } else {
        console.error(`Cannot parse "${data.displayValue}" as a number.`);
      }
    }
}, [setR]);
  return (<SpinButton min={0} max={255} step={1} value={r} onChange={onChangeRed} />);
};
