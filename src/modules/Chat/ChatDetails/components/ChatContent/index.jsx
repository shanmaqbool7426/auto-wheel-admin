import React from 'react';
import { Box, Group, Avatar, ScrollArea, ActionIcon, Input } from '@mantine/core';
import { IconSend } from '@tabler/icons-react';
import styles from './ChatContent.module.css';
import useChatDetails from '../../useChatDetails';

export default function ChatConten() {
  const {
    value,
    handleChangeSendMessage
  } = useChatDetails();
  return (
    <>
      <Box className={styles.chatHeader}>
        <Group gap={16}>
          <Avatar
            src={'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-8.png'}
            radius="xl"
            size={48}
          />

          <div style={{ flex: 1 }}>
            <Box className={styles.userName}>
              John Doe
            </Box>

            <Box className={styles.userMsg}>
              Personal Account
            </Box>
          </div>
        </Group>
      </Box>

      <Box className={styles.messageSecction}>
        <ScrollArea h="100%">
          <ul className={styles.messagesList}>
            <li className={`${styles.messageItem} ${styles.itemReceived}`}>
              <Box className={`${styles.message} ${styles.msgReceived}`}>
                Send messages from the messenger tab at the bottom for
                further information and arrangements
              </Box>
            </li>

            <li className={`${styles.messageItem} ${styles.itemReceived}`}>
              <Box className={`${styles.message} ${styles.msgReceived}`}>
                Send messge from the messenger tab at the bottom
              </Box>
            </li>

            <li className={`${styles.messageItem} ${styles.itemSend}`}>
              <Box className={`${styles.message} ${styles.msgSend}`}>
                Send messages from the messenger tab at the bottom for
                further information and arrangements
              </Box>
            </li>

          </ul>
        </ScrollArea>
      </Box>
    </>
  )
}
