import React from 'react';
import { ColorContext } from './ColorContext';

const toHex = (rgb) => {
  let hex = Number(rgb).toString(16);
  if (hex.length < 2) {
    hex = `0${hex}`;
  }
  return hex;
};

export const HexText = () => (
  <ColorContext.Consumer>
    {({ r, g, b }) => {
      const hexText = `#${toHex(r)}${toHex(g)}${toHex(b)}`;
      return (
        <h1 style={{ color: hexText }}>{hexText}</h1>
      );
    }}
  </ColorContext.Consumer>
);
