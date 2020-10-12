import React from 'react';
import {Image, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';
import {
  useRestyle,
  spacing,
  border,
  backgroundColor,
  color,
} from '@shopify/restyle';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';

import Box from '../box';
import Circle from '../circle';

const restyleFunctions = [spacing, border, backgroundColor, color];

export default function NotificationHeader({iconProps, circleProps}) {
  const restyleIconProps = useRestyle(restyleFunctions, iconProps || {});

  if (!iconProps.icon && !iconProps.image) {
    return null;
  }

  let element = (
    <FontAwesomeIcon
      {...restyleIconProps}
      icon={iconProps.icon}
      size={iconProps.iconSize}
    />
  );

  if (iconProps.image) {
    element = (
      <Image
        source={{
          uri: iconProps.image,
        }}
        style={{...styles.image, ...{borderRadius: circleProps.circleSize / 2}}}
      />
    );
  }

  return (
    <Box flex={0.15} height="100%" alignItems="center" justifyContent="center">
      <Circle size={circleProps.circleSize} variant={circleProps.variant}>
        {element}
      </Circle>
    </Box>
  );
}

NotificationHeader.propTypes = {
  icon: PropTypes.any, // @TODO: replace by correct one
  circleProps: PropTypes.object,
  variant: PropTypes.string,
};

NotificationHeader.defaultProps = {
  iconSize: 12,
  circleSize: 30,
};

const styles = StyleSheet.create({
  image: {
    // @TODO: move to restyle theme.
    flex: 1,
    width: '100%',
    height: null,
  },
});
