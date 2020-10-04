import React from 'react';
import {faFileUpload, faTrash, faSync} from '@fortawesome/free-solid-svg-icons';

import BrowseCard from '../notification/browseCard';
import Box from '../box';

export default function MediaElement() {
  const notificationsData = [
    {
      variant: 'info',
      cardTitle: 'File Updated',
      cardDescription: 'Your file has been successfully uploaded.',
      cardTime: '1 day',
      circleSize: 30,
      iconSize: 12,
      icon: faFileUpload,
      onPress: () => console.warn('1'),
    },
    {
      variant: 'error',
      cardTitle: 'File Deleted',
      cardDescription: 'Your file has been successfuly deleted.',
      cardTime: '1 day',
      circleSize: 30,
      iconSize: 12,
      icon: faTrash,
      onPress: () => console.warn('2'),
    },
    {
      variant: 'alert',
      cardTitle: 'Papssword Reset',
      cardDescription: 'Your password has been restored successfuly.',
      cardTime: '1 day',
      circleSize: 30,
      iconSize: 12,
      icon: faSync,
      onPress: () => console.warn('3'),
    },
  ];
  return (
    <Box
      flex={1}
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      backgroundColor="mainBackground">
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
    </Box>
  );
}
