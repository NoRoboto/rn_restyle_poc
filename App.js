import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {ThemeProvider} from '@shopify/restyle';

import Main from './src/main';

import theme from './src/styles/defaultTheme';

const App: () => React$Node = () => {
  return (
    <NavigationContainer>
      <ThemeProvider theme={theme}>
        <Main />
      </ThemeProvider>
    </NavigationContainer>
  );
};

export default App;
