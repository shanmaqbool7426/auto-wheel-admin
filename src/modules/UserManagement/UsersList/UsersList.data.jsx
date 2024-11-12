import Image from 'next/image';
import dayjs from 'dayjs';
import { ActionIcon, Group, Box } from '@mantine/core';
import { Avatar } from '@/assets/images';
import { IconEye, IconPencil, IconRestrictionShield } from '@/assets/icons';
import styles from './UsersList.module.css';

export const getColumns = (onClickEdit, onClickDelete, onClickDuplicate) => [
  {
    accessor: 'user',
    title: 'User',
    render: ({ user }) => {
      return (
        <Box className={styles.author}>
          <Box className={styles.authorAttachment}>
            <Image src={user?.avatar} alt={user.name} width={44} height={36} />
          </Box>
          <Box className={styles.authorInfo}>
            <Box className={styles.authorName}>{user?.name}</Box>
            <Box className={styles.authorEmail}>{user?.email}</Box>
          </Box>
        </Box>
      )
    },
  },
  {
    accessor: 'role',
    title: 'Role',
  },
  {
    accessor: 'lastLogin',
    title: 'Last login',
  },
  {
    accessor: 'joinedDate',
    title: 'Join Date',
    render: ({ joinedDate }) => {
      return (
        <>
          <Box className={styles.createdDate}>
            {dayjs(joinedDate).format('DD--MM-YYYY')}
          </Box>
          <Box className={styles.createdTime}>
            {dayjs(joinedDate).format('hh:mm A')}
          </Box>
        </>
      )
    },
  },
  {
    accessor: 'id',
    title: 'Actions',
    textAlign: 'center',
    render: ({ id }) => {
      return (
        <Group justify='center' wrap='nowrap'>
          <ActionIcon
            size={20}
            className={styles.actionButton}
            onClick={(e) => onClickEdit(e, id)}
          >
            <IconPencil />
          </ActionIcon>

          <ActionIcon
            size={20}
            className={styles.actionButton}
            onClick={(e) => onClickDelete(e, id)}
          >
            <IconEye />
          </ActionIcon>

          <ActionIcon
            size={20}
            className={styles.actionButton}
            onClick={(e) => onClickDuplicate(e, id)}
          >
            <IconRestrictionShield />
          </ActionIcon>
        </Group>
      )
    },
  },
]

export const usersListData = [
  {
    id: "111",
    user: { name: "Leslie Alexander", avatar: Avatar, email: "abc@gmail.com" },
    role: "Super Admin",
    lastLogin: "Yesterday",
    joinedDate: new Date(),
  },
  {
    id: "111qw4",
    user: { name: "Cody Fisher", avatar: Avatar, email: "abc@gmail.com" },
    role: "Editor",
    lastLogin: "2 minutes ago",
    joinedDate: new Date(),
  },
  {
    id: "111amjkl12",
    user: { name: "Leslie Alexander", avatar: Avatar, email: "abc@gmail.com" },
    role: "Super Admin",
    lastLogin: "Yesterday",
    joinedDate: new Date(),
  },
  {
    id: "111qw4qw3e",
    user: { name: "Cody Fisher", avatar: Avatar, email: "abc@gmail.com" },
    role: "Editor",
    lastLogin: "2 minutes ago",
    joinedDate: new Date(),
  },
]