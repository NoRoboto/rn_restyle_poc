import React from 'react';

import BrowseCard from './browseCard';
import Box from '../box';

export default function NotificationList({notificationsData}) {
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
              iconProps={notification.iconProps}
              textVariants={notification.textVariants}
              circleProps={notification.circleProps}
              onPress={notification.onPress}
            />
            <Box height={15} />
          </Box>
        );
      })}
    </>
  );
}

//@TODO: add Proptypes checker;
