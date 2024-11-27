import Image from 'next/image';
import { ActionIcon, Group, Box } from '@mantine/core';
import { Avatar } from '@/assets/images';
import { IconEye, IconPencil, IconRestrictionShield } from '@/assets/icons';
import styles from './UsersList.module.css';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
dayjs.extend(relativeTime);

export const getColumns = (onClickEdit, onClickDelete, onClickDuplicate) => [
  {
    accessor: '_id',
    title: 'User',
    render: ({ firstName, lastName, email }) => {
      return (
        <Box className={styles.author}>
          <Box className={styles.authorAttachment}>
            <Image src={Avatar} alt={`${firstName} ${lastName}`} width={44} height={36} />
          </Box>
          <Box className={styles.authorInfo}>
            <Box className={styles.authorName}>{firstName} {lastName}</Box>
            <Box className={styles.authorEmail}>{email}</Box>
          </Box>
        </Box>
      )
    },
  },
  {
    accessor: 'roles',
    title: 'Role',
    render: ({ roles }) => roles ? roles[0]?.name : '',
  },
  {
    accessor: 'lastLogin',
    title: 'Last login',
    render: ({ createdAt }) => dayjs(createdAt).fromNow(),
  },
  {
    accessor: 'createdAt',
    title: 'Join Date',
    render: ({ createdAt }) => {
      return (
        <>
          <Box className={styles.createdDate}>
            {dayjs(createdAt).format('DD--MM-YYYY')}
          </Box>
          <Box className={styles.createdTime}>
            {dayjs(createdAt).format('hh:mm A')}
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