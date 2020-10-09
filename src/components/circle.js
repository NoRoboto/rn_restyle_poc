import React from 'react';
import PropTypes from 'prop-types';
import {createRestyleComponent, createVariant} from '@shopify/restyle';

const variantCircleComponent = createVariant({
  themeKey: 'notificationHeaderVariants',
  defaults: {},
});

const CircleBox = createRestyleComponent([variantCircleComponent]);

export default function Circle({children, variant}) {
  return <CircleBox variant={variant}>{children}</CircleBox>;
}

Circle.propTypes = {
  size: PropTypes.number,
  backgroundColor: PropTypes.string,
  variant: PropTypes.string,
};

Circle.defaultProps = {
  size: 15,
};
