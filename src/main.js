import React from 'react';
import {StyleSheet, ScrollView, SafeAreaView} from 'react-native';

import AppTabs from './routing/tabs/primaryTab';
import {tabsData} from './routing/tabs/tabsData';

export default function Main() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.scrollViewContentContainerStyles}>
        <AppTabs tabs={tabsData} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollViewContentContainerStyles: {
    flexGrow: 1,
  },
});
