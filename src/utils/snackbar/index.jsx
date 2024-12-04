import { notifications } from '@mantine/notifications';
import {
  IconRosetteDiscountCheckFilled,
  IconAlertTriangle,
  IconAlertHexagon
} from '@tabler/icons-react';
import styles from './Snackbar.module.css';
import { Box } from '@mantine/core';

const position = 'top-center';

export const errorSnackbar = (message) => {

  notifications.show({
    message: <Box className={styles.customMessage}>
      <Box><IconAlertTriangle /></Box>
      <Box>{message}</Box>
    </Box>,
    position: position,
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
    message: <Box className={styles.customMessage}><Box><IconRosetteDiscountCheckFilled /></Box><Box>{message}</Box></Box>,
    position: position,
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
    message: <Box className={styles.customMessage}><Box><IconAlertHexagon /></Box><Box>{message}</Box></Box>,
    position: position,
    classNames: {
      root: styles.warningRoot,
      description: styles.description,
      title: styles.title,
      closeButton: styles.closeButton,
    }
  });
};
