import React from 'react';
import {TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';

import {useRestyle, spacing, border, backgroundColor} from '@shopify/restyle';

import Text from '../text';
import Card from '../card';
import Box from '../box';
import NotificationHeader from '../notification/notificationHeader';

const restyleFunctions = [spacing, border, backgroundColor];

const BrowseCard = ({
  onPress,
  cardTitle,
  cardDescription,
  cardTime,
  icon,
  initialFocus,
  circleSize,
  iconSize,
  iconProps, //@TODO: rename and add missing prop.
  textVariants,
  ...rest
}) => {
  const props = useRestyle(restyleFunctions, rest);
  // https://www.behance.net/gallery/103533309/Notification-UI-concept-design?tracking_source=search_projects_recommended%7Ccard%20ui
  return (
    <TouchableOpacity onPress={onPress}>
      <Card {...props}>
        <Box
          flex={1}
          justifyContent="center"
          alignItems="center"
          flexDirection="row"
          paddingHorizontal="s">
          <NotificationHeader
            circleSize={circleSize}
            iconSize={iconSize}
            icon={icon}
            iconProps={iconProps}
            variant={props.variant}
          />
          <Box flex={0.7} paddingLeft="s" paddingRight="l">
            <Text variant={textVariants.title} paddingBottom="s">
              {cardTitle}
            </Text>
            <Text variant={textVariants.body} textBreakStrategy="simple">
              {cardDescription}
            </Text>
          </Box>
          <Box flex={0.1}>
            <Text variant={textVariants.body}>{cardTime}</Text>
          </Box>
        </Box>
      </Card>
    </TouchableOpacity>
  );
};

BrowseCard.propTypes = {
  onPress: PropTypes.func,
  cardTitle: PropTypes.string,
  cardDescription: PropTypes.string,
  cardTime: PropTypes.string,
  cardVariant: PropTypes.string,
  icon: PropTypes.any, // @TODO: replace by correct one
  circleSize: PropTypes.number,
  iconSize: PropTypes.number,
  iconProps: PropTypes.object, // @TODO: replace by correct one
  textVariants: PropTypes.object,
};

BrowseCard.defaultProps = {
  onPress: () => null,
  label: '',
  cardVariant: '',
};

export default BrowseCard;
