import React from 'react';
import Box from '../components/box';

import NotificationList from '../components/notification/notificationList';
import {notificationsData} from '../data/notifications';

export default function Home() {
  return (
    <Box
      flex={1}
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      backgroundColor="mainBackground">
      <NotificationList notificationsData={notificationsData} />
    </Box>
  );
}
