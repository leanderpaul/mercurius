/**
 * Importing NPM Packages
 */

/**
 * Importing user-defined modules
 */

/**
 * Types
 */

type Colors = 'red' | 'volcano' | 'orange' | 'gold' | 'yellow' | 'lime' | 'green' | 'cyan' | 'blue' | 'geekblue' | 'purple' | 'magenta';

interface ColorPallete {
  50: string;
  100: string;
  200: string;
  300: string;
  400: string;
  500: string;
  600: string;
  700: string;
  800: string;
  900: string;
}

interface Theme {
  name: string;
  mode: 'light' | 'dark';
  primary: ColorPallete;
  error: ColorPallete;
  warning: ColorPallete;
  info: ColorPallete;
  success: ColorPallete;
  text: {
    primary: string;
    secondary: string;
    disabled: string;
  };
  divider: string;
  border: string;
  background: {
    primary: string;
    secondary: string;
  };
  colors: {
    [key in Colors]: ColorPallete;
  };
}

/**
 * Constants
 */
const lightColors = {
  red: {
    50: '#fff1f0',
    100: '#ffccc7',
    200: '#ffa39e',
    300: '#ff7875',
    400: '#ff4d4f',
    500: '#f5222d',
    600: '#cf1322',
    700: '#a8071a',
    800: '#820014',
    900: '#5c0011',
  },
  volcano: {
    50: '#fff2e8',
    100: '#ffd8bf',
    200: '#ffbb96',
    300: '#ff9c6e',
    400: '#ff7a45',
    500: '#fa541c',
    600: '#d4380d',
    700: '#ad2102',
    800: '#871400',
    900: '#610b00',
  },
  orange: {
    50: '#fff7e6',
    100: '#ffe7ba',
    200: '#ffd591',
    300: '#ffc069',
    400: '#ffa940',
    500: '#fa8c16',
    600: '#d46b08',
    700: '#ad4e00',
    800: '#873800',
    900: '#612500',
  },
  gold: {
    50: '#fffbe6',
    100: '#fff1b8',
    200: '#ffe58f',
    300: '#ffd666',
    400: '#ffc53d',
    500: '#faad14',
    600: '#d48806',
    700: '#ad6800',
    800: '#874d00',
    900: '#613400',
  },
  yellow: {
    50: '#feffe6',
    100: '#ffffb8',
    200: '#fffb8f',
    300: '#fff566',
    400: '#ffec3d',
    500: '#fadb14',
    600: '#d4b106',
    700: '#ad8b00',
    800: '#876800',
    900: '#614700',
  },
  lime: {
    50: '#fcffe6',
    100: '#f4ffb8',
    200: '#eaff8f',
    300: '#d3f261',
    400: '#bae637',
    500: '#a0d911',
    600: '#7cb305',
    700: '#5b8c00',
    800: '#3f6600',
    900: '#254000',
  },
  green: {
    50: '#f6ffed',
    100: '#d9f7be',
    200: '#b7eb8f',
    300: '#95de64',
    400: '#73d13d',
    500: '#52c41a',
    600: '#389e0d',
    700: '#237804',
    800: '#135200',
    900: '#092b00',
  },
  cyan: {
    50: '#e6fffb',
    100: '#b5f5ec',
    200: '#87e8de',
    300: '#5cdbd3',
    400: '#36cfc9',
    500: '#13c2c2',
    600: '#08979c',
    700: '#006d75',
    800: '#00474f',
    900: '#002329',
  },
  blue: {
    50: '#e6f7ff',
    100: '#bae7ff',
    200: '#91d5ff',
    300: '#69c0ff',
    400: '#40a9ff',
    500: '#1890ff',
    600: '#096dd9',
    700: '#0050b3',
    800: '#003a8c',
    900: '#002766',
  },
  geekblue: {
    50: '#f0f5ff',
    100: '#d6e4ff',
    200: '#adc6ff',
    300: '#85a5ff',
    400: '#597ef7',
    500: '#2f54eb',
    600: '#1d39c4',
    700: '#10239e',
    800: '#061178',
    900: '#030852',
  },
  purple: {
    50: '#f9f0ff',
    100: '#efdbff',
    200: '#d3adf7',
    300: '#b37feb',
    400: '#9254de',
    500: '#722ed1',
    600: '#531dab',
    700: '#391085',
    800: '#22075e',
    900: '#120338',
  },
  magenta: {
    50: '#fff0f6',
    100: '#ffd6e7',
    200: '#ffadd2',
    300: '#ff85c0',
    400: '#f759ab',
    500: '#eb2f96',
    600: '#c41d7f',
    700: '#9e1068',
    800: '#780650',
    900: '#520339',
  },
  grey: {
    50: '#a6a6a6',
    100: '#999999',
    200: '#8c8c8c',
    300: '#808080',
    400: '#737373',
    500: '#666666',
    600: '#404040',
    700: '#1a1a1a',
    800: '#000000',
    900: '#000000',
  },
};

const darkColors = {
  red: {
    50: '#2a1215',
    100: '#431418',
    200: '#58181c',
    300: '#791a1f',
    400: '#a61d24',
    500: '#d32029',
    600: '#e84749',
    700: '#f37370',
    800: '#f89f9a',
    900: '#fac8c3',
  },
  volcano: {
    50: '#2b1611',
    100: '#441d12',
    200: '#592716',
    300: '#7c3118',
    400: '#aa3e19',
    500: '#d84a1b',
    600: '#e87040',
    700: '#f3956a',
    800: '#f8b692',
    900: '#fad4bc',
  },
  orange: {
    50: '#2b1d11',
    100: '#442a11',
    200: '#593815',
    300: '#7c4a15',
    400: '#aa6215',
    500: '#d87a16',
    600: '#e89a3c',
    700: '#f3b765',
    800: '#f8cf8d',
    900: '#fae3b7',
  },
  gold: {
    50: '#2b2111',
    100: '#443111',
    200: '#594214',
    300: '#7c5914',
    400: '#aa7714',
    500: '#d89614',
    600: '#e8b339',
    700: '#f3cc62',
    800: '#f8df8b',
    900: '#faedb5',
  },
  yellow: {
    50: '#2b2611',
    100: '#443b11',
    200: '#595014',
    300: '#7c6e14',
    400: '#aa9514',
    500: '#d8bd14',
    600: '#e8d639',
    700: '#f3ea62',
    800: '#f8f48b',
    900: '#fafab5',
  },
  lime: {
    50: '#1f2611',
    100: '#2e3c10',
    200: '#3e4f13',
    300: '#536d13',
    400: '#6f9412',
    500: '#8bbb11',
    600: '#a9d134',
    700: '#c9e75d',
    800: '#e4f88b',
    900: '#f0fab5',
  },
  green: {
    50: '#162312',
    100: '#1d3712',
    200: '#274916',
    300: '#306317',
    400: '#3c8618',
    500: '#49aa19',
    600: '#6abe39',
    700: '#8fd460',
    800: '#b2e58b',
    900: '#d5f2bb',
  },
  cyan: {
    50: '#112123',
    100: '#113536',
    200: '#144848',
    300: '#146262',
    400: '#138585',
    500: '#13a8a8',
    600: '#33bcb7',
    700: '#58d1c9',
    800: '#84e2d8',
    900: '#b2f1e8',
  },
  blue: {
    50: '#111d2c',
    100: '#112a45',
    200: '#15395b',
    300: '#164c7e',
    400: '#1765ad',
    500: '#177ddc',
    600: '#3c9ae8',
    700: '#65b7f3',
    800: '#8dcff8',
    900: '#b7e3fa',
  },
  geekblue: {
    50: '#131629',
    100: '#161d40',
    200: '#1c2755',
    300: '#203175',
    400: '#263ea0',
    500: '#2b4acb',
    600: '#5273e0',
    700: '#7f9ef3',
    800: '#a8c1f8',
    900: '#d2e0fa',
  },
  purple: {
    50: '#1a1325',
    100: '#24163a',
    200: '#301c4d',
    300: '#3e2069',
    400: '#51258f',
    500: '#642ab5',
    600: '#854eca',
    700: '#ab7ae0',
    800: '#cda8f0',
    900: '#ebd7fa',
  },
  magenta: {
    50: '#291321',
    100: '#40162f',
    200: '#551c3b',
    300: '#75204f',
    400: '#a02669',
    500: '#cb2b83',
    600: '#e0529c',
    700: '#f37fb7',
    800: '#f8a8cc',
    900: '#fad2e3',
  },
  grey: {
    50: '#151515',
    100: '#1f1f1f',
    200: '#2d2d2d',
    300: '#393939',
    400: '#494949',
    500: '#5a5a5a',
    600: '#6a6a6a',
    700: '#7b7b7b',
    800: '#888888',
    900: '#969696',
  },
};

export const shadows = [
  'none',
  '0px 2px 1px -1px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 1px 3px 0px rgba(0,0,0,0.12)',
  '0px 3px 1px -2px rgba(0,0,0,0.2),0px 2px 2px 0px rgba(0,0,0,0.14),0px 1px 5px 0px rgba(0,0,0,0.12)',
  '0px 3px 3px -2px rgba(0,0,0,0.2),0px 3px 4px 0px rgba(0,0,0,0.14),0px 1px 8px 0px rgba(0,0,0,0.12)',
  '0px 2px 4px -1px rgba(0,0,0,0.2),0px 4px 5px 0px rgba(0,0,0,0.14),0px 1px 10px 0px rgba(0,0,0,0.12)',
  '0px 3px 5px -1px rgba(0,0,0,0.2),0px 5px 8px 0px rgba(0,0,0,0.14),0px 1px 14px 0px rgba(0,0,0,0.12)',
  '0px 3px 5px -1px rgba(0,0,0,0.2),0px 6px 10px 0px rgba(0,0,0,0.14),0px 1px 18px 0px rgba(0,0,0,0.12)',
  '0px 4px 5px -2px rgba(0,0,0,0.2),0px 7px 10px 1px rgba(0,0,0,0.14),0px 2px 16px 1px rgba(0,0,0,0.12)',
  '0px 5px 5px -3px rgba(0,0,0,0.2),0px 8px 10px 1px rgba(0,0,0,0.14),0px 3px 14px 2px rgba(0,0,0,0.12)',
  '0px 5px 6px -3px rgba(0,0,0,0.2),0px 9px 12px 1px rgba(0,0,0,0.14),0px 3px 16px 2px rgba(0,0,0,0.12)',
  '0px 6px 6px -3px rgba(0,0,0,0.2),0px 10px 14px 1px rgba(0,0,0,0.14),0px 4px 18px 3px rgba(0,0,0,0.12)',
  '0px 6px 7px -4px rgba(0,0,0,0.2),0px 11px 15px 1px rgba(0,0,0,0.14),0px 4px 20px 3px rgba(0,0,0,0.12)',
  '0px 7px 8px -4px rgba(0,0,0,0.2),0px 12px 17px 2px rgba(0,0,0,0.14),0px 5px 22px 4px rgba(0,0,0,0.12)',
  '0px 7px 8px -4px rgba(0,0,0,0.2),0px 13px 19px 2px rgba(0,0,0,0.14),0px 5px 24px 4px rgba(0,0,0,0.12)',
  '0px 7px 9px -4px rgba(0,0,0,0.2),0px 14px 21px 2px rgba(0,0,0,0.14),0px 5px 26px 4px rgba(0,0,0,0.12)',
  '0px 8px 9px -5px rgba(0,0,0,0.2),0px 15px 22px 2px rgba(0,0,0,0.14),0px 6px 28px 5px rgba(0,0,0,0.12)',
  '0px 8px 10px -5px rgba(0,0,0,0.2),0px 16px 24px 2px rgba(0,0,0,0.14),0px 6px 30px 5px rgba(0,0,0,0.12)',
  '0px 8px 11px -5px rgba(0,0,0,0.2),0px 17px 26px 2px rgba(0,0,0,0.14),0px 6px 32px 5px rgba(0,0,0,0.12)',
  '0px 9px 11px -5px rgba(0,0,0,0.2),0px 18px 28px 2px rgba(0,0,0,0.14),0px 7px 34px 6px rgba(0,0,0,0.12)',
  '0px 9px 12px -6px rgba(0,0,0,0.2),0px 19px 29px 2px rgba(0,0,0,0.14),0px 7px 36px 6px rgba(0,0,0,0.12)',
  '0px 10px 13px -6px rgba(0,0,0,0.2),0px 20px 31px 3px rgba(0,0,0,0.14),0px 8px 38px 7px rgba(0,0,0,0.12)',
  '0px 10px 13px -6px rgba(0,0,0,0.2),0px 21px 33px 3px rgba(0,0,0,0.14),0px 8px 40px 7px rgba(0,0,0,0.12)',
  '0px 10px 14px -6px rgba(0,0,0,0.2),0px 22px 35px 3px rgba(0,0,0,0.14),0px 8px 42px 7px rgba(0,0,0,0.12)',
  '0px 11px 14px -7px rgba(0,0,0,0.2),0px 23px 36px 3px rgba(0,0,0,0.14),0px 9px 44px 8px rgba(0,0,0,0.12)',
  '0px 11px 15px -7px rgba(0,0,0,0.2),0px 24px 38px 3px rgba(0,0,0,0.14),0px 9px 46px 8px rgba(0,0,0,0.12)',
];

const lightTheme: Theme = {
  name: 'Light Theme',
  mode: 'light',
  primary: lightColors.blue,
  error: lightColors.red,
  warning: lightColors.gold,
  info: lightColors.blue,
  success: lightColors.green,
  text: {
    primary: '#252525',
    secondary: '#8b8b8b',
    disabled: '#bebebe',
  },
  divider: '#f0f0f0',
  border: '#d8d8d8',
  background: {
    primary: '#fff',
    secondary: '#f5f5f5',
  },
  colors: lightColors,
};

const darkTheme: Theme = {
  name: 'Dark Theme',
  mode: 'light',
  primary: darkColors.blue,
  error: darkColors.red,
  warning: darkColors.gold,
  info: darkColors.blue,
  success: darkColors.green,
  text: {
    primary: '#dadada',
    secondary: '#7c7c7c',
    disabled: '#5a5a5a',
  },
  divider: '#303030',
  border: '#424242',
  background: {
    primary: '#262626',
    secondary: '#121212',
  },
  colors: darkColors,
};

export const themes = { light: lightTheme, dark: darkTheme };
