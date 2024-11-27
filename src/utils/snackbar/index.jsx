import { notifications } from '@mantine/notifications';
import styles from './Snackbar.module.css';
import { Box } from '@mantine/core';

const position = 'top-center';

export const errorSnackbar = (message) => {
  const errorMessage = Array.isArray(message)
    ? message?.[0]
    : message ?? 'Something went wrong';

  notifications.show({
    message: <Box className={styles.customMessage}>Icon: {errorMessage}</Box>,
    position: position,
    containerWidth: 360,
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
    containerWidth: 360,
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
    containerWidth: 360,
    classNames: {
      root: styles.warningRoot,
      description: styles.description,
      title: styles.title,
      closeButton: styles.closeButton,
    }
  });
};
