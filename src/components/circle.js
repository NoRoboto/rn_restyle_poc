import React from 'react';
import PropTypes from 'prop-types';
import {createRestyleComponent, createVariant} from '@shopify/restyle';

const variantCircleComponent = createVariant({
  themeKey: 'notificationHeaderVariants',
  defaults: {},
});

const CircleBox = createRestyleComponent([variantCircleComponent]);

export default function Circle({size, backgroundColor, children, variant}) {
  return (
    <CircleBox
      width={size}
      height={size}
      borderRadius={size / 2}
      alignItems="center"
      justifyContent="center"
      variant={variant}
      backgroundColor={backgroundColor}>
      {children}
    </CircleBox>
  );
}

Circle.propTypes = {
  size: PropTypes.number,
  backgroundColor: PropTypes.string,
  variant: PropTypes.string,
};

Circle.defaultProps = {
  size: 15,
  backgroundColor: 'primaryText',
};
