// "use client";

import { SpinButton, SpinButtonOnChangeData } from '@fluentui/react-components';
import React, { useContext } from 'react';
import { ColorContext } from './ColorContext';

export const GreenSelector: React.FunctionComponent = () => {
  const {g, setG} = useContext<ColorPlusSetter>(ColorContext);
  const onChangeGreen = React.useCallback((_: React.SyntheticEvent<HTMLElement>, data?: SpinButtonOnChangeData) => {
    if (data != undefined && data.value !== undefined) {
      setG(data.value ?? 0);
    } else if (data != undefined && data.displayValue !== undefined) {
      const newValue = parseInt(data.displayValue);
      if (!Number.isNaN(newValue)) {
        setG(data.value ?? 0);
      } else {
        console.error(`Cannot parse "${data.displayValue}" as a number.`);
      }
    }
}, [setG]);
  return (<SpinButton min={0} max={255} step={1} value={g} onChange={onChangeGreen} />);
};
