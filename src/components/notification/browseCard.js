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
            variant={props.variant}
          />
          <Box flex={0.7} paddingLeft="s" paddingRight="l">
            <Text variant="browseCardLabelTitle" paddingBottom="s">
              {cardTitle}
            </Text>
            <Text variant="browseCardLabel" textBreakStrategy="simple">
              {cardDescription}
            </Text>
          </Box>
          <Box flex={0.1}>
            <Text variant="browseCardLabel">{cardTime}</Text>
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
};

BrowseCard.defaultProps = {
  onPress: () => null,
  label: '',
  cardVariant: '',
};

export default BrowseCard;
