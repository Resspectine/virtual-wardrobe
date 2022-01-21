import { FC } from 'react';
import create from 'zustand';

import { AppNotificationMessage } from './Components';
import { AppNotificationRoot } from './styled';

type NotificationType = 'success' | 'error' | 'warning';

export interface Notification {
  id: number;
  message: string;
  type: NotificationType;
}

interface AppNotificationStore {
  notifications: Notification[];
  addNotification: (notification: Pick<Notification, 'message' | 'type'>) => void;
  deleteNotification: (deleteId: number) => void;
}

let id = 0;

export const useAppNotification = create<AppNotificationStore>((set, get) => ({
  notifications: [],
  addNotification: notification =>
    set({
      // eslint-disable-next-line no-plusplus
      notifications: [...get().notifications, { ...notification, id: id++ }],
    }),
  deleteNotification: deleteId =>
    set({
      notifications: get().notifications.filter(({ id: elementId }) => elementId !== deleteId),
    }),
}));

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
