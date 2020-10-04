import React from 'react';
import {StyleSheet, SafeAreaView, ScrollView} from 'react-native';
import {ThemeProvider} from '@shopify/restyle';

import NotificationList from './src/components/notification/notificationList';

import theme from './src/styles/defaultTheme';

const App: () => React$Node = () => {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView style={styles.container}>
        <ScrollView
          style={styles.scrollView}
          contentContainerStyle={styles.scrollViewContentContainerStyles}>
          <NotificationList />
        </ScrollView>
      </SafeAreaView>
    </ThemeProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EFF6FF',
  },
  scrollViewContentContainerStyles: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  scrollView: {
    backgroundColor: '#EFF6FF',
    marginHorizontal: 20,
  },
});
export default App;
