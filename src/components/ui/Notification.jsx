import React, { useEffect, useState } from 'react';
import { useNotification } from '../../contexts/NotificationContext';

const Notification = () => {
  const { notification } = useNotification();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (notification) {
      setIsVisible(true);
      const timer = setTimeout(() => setIsVisible(false), 2700); 
      return () => clearTimeout(timer);
    }
  }, [notification]);

  if (!notification) return null;

  return (
    <div
      className={`fixed bottom-5 left-1/2 -translate-x-1/2 bg-layout text-primary px-6 py-3 rounded-lg shadow-lg z-[200] transition-all duration-300 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
      }`}
    >
      {notification}
    </div>
  );
};

export default Notification;