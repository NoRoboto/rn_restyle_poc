import React from 'react';

import BrowseCard from './browseCard';
import Box from '../box';

import {notificationsData} from '../../data/notifications';

export default function NotificationList() {
  return (
    <>
      {notificationsData.map((notification, index) => {
        return (
          <Box key={index}>
            <BrowseCard
              key={index}
              variant={notification.variant}
              cardTitle={notification.cardTitle}
              cardDescription={notification.cardDescription}
              cardTime={notification.cardTime}
              circleSize={notification.circleSize}
              iconSize={notification.iconSize}
              icon={notification.icon}
              onPress={notification.onPress}
            />
            <Box height={15} />
          </Box>
        );
      })}
    </>
  );
}
