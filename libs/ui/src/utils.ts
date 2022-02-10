/**
 * Importing NPM Packages
 */
import { UIError } from '@mercurius/error';

/**
 * Importing user-defined modules
 */

/**
 * Types
 */

/**
 * Constants
 */

export function hexToRgb(color: string) {
  const isValidHex = /^#([A-Fa-f0-9]{3}){1,2}$/.test(color);
  if (!isValidHex) return '';
  color = color.substring(1);
  if (color.length === 3) color = '' + color[0] + color[0] + color[1] + color[1] + color[2] + color[2];
  const hexNum = Number('0x' + color);
  const r = (hexNum >> 16) & 255;
  const g = (hexNum >> 8) & 255;
  const b = hexNum & 255;
  return `rgb(${r}, ${g}, ${b})`;
}

export function getRgba(color: string, opacity: number) {
  const isValidColor = color.includes('rgb') || color.charAt(0) === '#';
  if (!isValidColor) throw new UIError('Invalid color provided. Only #nnn, #nnnnnn, rgb() and rgba() supported');
  const rgb = color.includes('rgb') ? color : hexToRgb(color);

  const marker = rgb.indexOf('(');
  const rgbArr = rgb.substring(marker + 1, rgb.length - 1).split(',');
  const values = rgbArr.map(parseFloat);
  return `rgba(${values[0]}, ${values[1]}, ${values[2]}, ${opacity})`;
}
