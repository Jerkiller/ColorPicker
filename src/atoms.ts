import {
  atom,
  selector,
} from 'recoil';

export const red = atom({
  key: 'red',
  default: 25,
});

export const green = atom({
  key: 'green',
  default: 25,
});

export const blue = atom({
  key: 'blue',
  default: 25,
});

const toHex = (rgb: number) : string => {
  let hex = rgb.toString(16);
  if (hex.length < 2) {
    hex = `0${hex}`;
  }
  return hex;
};

export const hex = selector({
  key: 'hex',
  get: ({ get }) => (`#${toHex(get(red))}${toHex(get(green))}${toHex(get(blue))}`),
});
