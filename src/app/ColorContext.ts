import { createContext } from 'react';

export const ColorContext = createContext<ColorPlusSetter>({
  r: 25,
  g: 25,
  b: 25,
  setR: () => {},
  setG: () => {},
  setB: () => {},
});
ColorContext.displayName = 'ColorContext';
