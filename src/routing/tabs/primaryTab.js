import React from 'react';
import PropTypes from 'prop-types';
import {useTheme} from '@shopify/restyle';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

export default function AppTabs({tabs}) {
  const theme = useTheme();
  const {bottomTabNavigatorStyle, bottomTabNavigatorTextStyle, colors} = theme;
  const backgroundColor = colors[bottomTabNavigatorStyle.backgroundColor];

  return (
    <Tab.Navigator
      tabBarOptions={{
        tabStyle: {...bottomTabNavigatorStyle, backgroundColor},
        labelStyle: bottomTabNavigatorTextStyle,
      }}>
      {tabs.map((tab, index) => (
        <Tab.Screen key={index} name={tab.name} component={tab.component} />
      ))}
    </Tab.Navigator>
  );
}

AppTabs.propTypes = {
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      component: PropTypes.func.isRequired,
    }),
  ),
};
