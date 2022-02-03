import { createContext } from 'react';

export const ColorContext = createContext({
  r: 25,
  g: 25,
  b: 25,
});
ColorContext.displayName = 'ColorContext';
