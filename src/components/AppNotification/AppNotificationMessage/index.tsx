import { FC } from 'react';

import { iconByType } from './helper';
import { useAppNotificationMessage } from './hooks';
import { AppNotificationMessageCancel, AppNotificationMessageWrapper } from './styled';

import { Notification } from 'types/notification';

export interface AppNotificationMessageProps {
  notification: Notification;
  onRemove: (id: number) => void;
}

export const AppNotificationMessage: FC<AppNotificationMessageProps> = ({ onRemove, notification }) => {
  const { onClick, isRemoving, onCancelClick } = useAppNotificationMessage({
    notification,
    onRemove,
  });

  const Icon = iconByType[notification.type];

  return (
    <AppNotificationMessageWrapper type={notification.type} remove={isRemoving} onClick={onClick}>
      <Icon />
      {notification.message}
      <AppNotificationMessageCancel onClick={onCancelClick} />
    </AppNotificationMessageWrapper>
  );
};
