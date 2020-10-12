import React from 'react';
import Box from '../components/box';

import NotificationList from '../components/notification/notificationList';
import {simpleNotificationsImageData} from '../data/notifications';

export default function Variant2() {
  return (
    <Box
      flex={1}
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      backgroundColor="mainBackground">
      <NotificationList notificationsData={simpleNotificationsImageData} />
    </Box>
  );
}
