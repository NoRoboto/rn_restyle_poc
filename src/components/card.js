import {createRestyleComponent, createVariant} from '@shopify/restyle';

const variant = createVariant({
  themeKey: 'browseCardVariants',
  defaults: {
    backgroundColor: 'cardPrimaryBackground',
  },
});

const Card = createRestyleComponent([variant]);

export default Card;
