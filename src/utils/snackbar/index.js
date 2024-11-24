import { notifications } from '@mantine/notifications';
import styles from './Snackbar.module.css';

const position = 'top-center';

export const errorSnackbar = (message) => {
  const errorMessage = Array.isArray(message)
    ? message?.[0]
    : message ?? 'Something went wrong';

  notifications.show({
    message: errorMessage,
    position: position,
    withBorder: true,
    classNames: {
      root: styles.errorRoot,
      description: styles.description,
      title: styles.title,
      closeButton: styles.closeButton,
    }
  });
};

export const successSnackbar = (message = 'Success') => {
  notifications.show({
    message: message,
    position: position,
    withBorder: true,
    classNames: {
      root: styles.successRoot,
      description: styles.description,
      title: styles.title,
      closeButton: styles.closeButton,
    }
  });
};

export const warningSnackbar = (message = "Warning") => {
  notifications.show({
    message: message,
    position: position,
    withBorder: true,
    classNames: {
      root: styles.warningRoot,
      description: styles.description,
      title: styles.title,
      closeButton: styles.closeButton,
    }
  });
};
