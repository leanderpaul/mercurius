import { addDecorator } from '@storybook/react';
import { withThemesProvider } from 'storybook-addon-styled-component-theme';
import { ThemeProvider } from 'styled-components';

import { themes } from '../src/themes';

addDecorator(withThemesProvider([themes.light, themes.dark]), ThemeProvider);
