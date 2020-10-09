import React from 'react';
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

export default function NotificationHeader({
  icon,
  iconSize,
  circleSize,
  variant,
  iconProps,
}) {
  const restyleIconProps = useRestyle(restyleFunctions, iconProps || {});

  if (icon) {
    return (
      <Box
        flex={0.15}
        height="100%"
        alignItems="center"
        justifyContent="center">
        <Circle size={circleSize} variant={variant}>
          <FontAwesomeIcon {...restyleIconProps} size={iconSize} icon={icon} />
        </Circle>
      </Box>
    );
  }

  return null;
}

NotificationHeader.propTypes = {
  icon: PropTypes.any, // @TODO: replace by correct one
  iconSize: PropTypes.number,
  circleSize: PropTypes.number,
  variant: PropTypes.string,
};

NotificationHeader.defaultProps = {
  iconSize: 12,
  circleSize: 30,
};
