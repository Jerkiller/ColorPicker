import React from 'react';
import { useRecoilValue } from 'recoil';
import { hex } from './atoms';

export const HexText = () => {
  const hexText = useRecoilValue(hex);
  return (
    <h1 style={{ color: hexText }}>{hexText}</h1>
  );
};
