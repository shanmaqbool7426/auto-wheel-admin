import Image from 'next/image';
import dayjs from 'dayjs';
import { ActionIcon, Group, Box } from '@mantine/core';
import { Avatar } from '@/assets/images';
import { IconDuplicate, IconTrash, IconPencil } from '@/assets/icons';
import styles from './Comments.module.css';

export const getColumns = (onClickEdit, onClickDelete, onClickDuplicate) => [
  {
    accessor: 'author',
    title: 'Author',
    render: ({ author }) => {
      return (
        <Box className={styles.author}>
          <Box className={styles.authorAttachment}>
            <Image src={author?.avatar} alt="car" width={44} height={36} />
          </Box>
          <Box className={styles.authorInfo}>
            <Box className={styles.authorName}>{author?.name}</Box>
            <Box className={styles.authorEmail}>{author?.email}</Box>
          </Box>
        </Box>
      )
    },
  },
  {
    accessor: 'comment',
    title: 'Comment',
  },
  {
    accessor: 'rensponseTo',
    title: 'In Response to',
  },
  {
    accessor: 'submittedOn',
    title: 'Submitted on',
    render: ({ submittedOn }) => {
      return (
        <>
          <Box className={styles.createdDate}>
            {dayjs(submittedOn).format('DD--MM-YYYY')}
          </Box>
          <Box className={styles.createdTime}>
            {dayjs(submittedOn).format('hh:mm A')}
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
            <IconTrash />
          </ActionIcon>

          <ActionIcon
            size={20}
            className={styles.actionButton}
            onClick={(e) => onClickDuplicate(e, id)}
          >
            <IconDuplicate />
          </ActionIcon>
        </Group>
      )
    },
  },
]

export const postsData = [
  {
    id: "111",
    author: { name: "Leslie Alexander", avatar: Avatar, email: "abc@gmail.com" },
    comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
    rensponseTo: "Lorem ipsum dolor sit amet, adipiscing elit, sed do eiusmod",
    submittedOn: new Date(),
  },
  {
    id: "111qw4",
    author: { name: "Cody Fisher", avatar: Avatar, email: "abc@gmail.com" },
    comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
    rensponseTo: "Lorem ipsum dolor sit amet, adipiscing elit, sed do eiusmod",
    submittedOn: new Date(),
  },
]