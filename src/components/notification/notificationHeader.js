import React from 'react';
import PropTypes from 'prop-types';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';

import Box from '../box';
import Circle from '../circle';

export default function NotificationHeader({
  icon,
  iconSize,
  circleSize,
  variant,
}) {
  if (icon) {
    return (
      <Box
        flex={0.15}
        height="100%"
        alignItems="center"
        justifyContent="center">
        <Circle size={circleSize} variant={variant}>
          <FontAwesomeIcon color="white" size={iconSize} icon={icon} />
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
