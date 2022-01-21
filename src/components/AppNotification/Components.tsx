import { FC, useEffect, useRef, useState } from 'react';

import { AppNotificationMessageCancel, AppNotificationMessageWrapper } from './styled';

import { Notification } from '.';

interface AppNotificationMessageProps {
  notification: Notification;
  onRemove: () => void;
}

export const AppNotificationMessage: FC<AppNotificationMessageProps> = ({ onRemove, notification }) => {
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const animationRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [isRemoving, setRemoving] = useState(false);

  useEffect(() => {
    timerRef.current = setTimeout(() => onRemove(), 3000);
    animationRef.current = setTimeout(() => setRemoving(true), 2600);

    return (): void => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }

      if (animationRef.current) {
        clearTimeout(animationRef.current);
      }
    };
  }, []);

  return (
    <AppNotificationMessageWrapper
      remove={isRemoving}
      onClick={() => {
        if (timerRef.current) {
          clearTimeout(timerRef.current);
        }

        if (animationRef.current) {
          clearTimeout(animationRef.current);
        }
      }}
    >
      {notification.message}
      <AppNotificationMessageCancel
        onClick={event => {
          event.stopPropagation();

          setRemoving(true);

          timerRef.current = setTimeout(() => onRemove(), 400);
        }}
      />
    </AppNotificationMessageWrapper>
  );
};
