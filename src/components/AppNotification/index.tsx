import { FC } from 'react';

import { AppNotificationMessage } from './Components';
import { AppNotificationRoot } from './styled';

import { useAppNotification } from 'store/appNotification';

export const AppNotification: FC = () => {
  const notifications = useAppNotification(state => state.notifications);
  const deleteNotification = useAppNotification(state => state.deleteNotification);

  return (
    <AppNotificationRoot>
      {notifications.map(notification => (
        <AppNotificationMessage
          onRemove={() => deleteNotification(notification.id)}
          notification={notification}
          key={notification.id}
        />
      ))}
    </AppNotificationRoot>
  );
};
