import React from 'react';
import Box from '../components/box';

import NotificationList from '../components/notification/notificationList';

export default function Home() {
  return (
    <Box
      flex={1}
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      backgroundColor="mainBackground">
      <NotificationList />
    </Box>
  );
}
