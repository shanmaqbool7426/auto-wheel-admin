import styles from './AllPosts.module.css';
import Image from 'next/image';
import dayjs from 'dayjs';
import { ActionIcon, Group, Box } from '@mantine/core';
import { ImgPostVehicle } from '@/assets/images';
import { IconDuplicate, IconTrash, IconPencil } from '@/assets/icons';

export const getColumns = (onClickEdit, onClickDelete, onClickDuplicate) => [
  {
    accessor: 'title',
    title: 'Post',
    render: (record) => {
      return (
        <Box className={styles.post}>
          <Box className={styles.postAttachment}>
            <Image src={record?.attachment} alt="car" width={44} height={36} />
          </Box>
          <Box className={styles.postTitle}>
            {record?.title}
          </Box>
        </Box>
      )
    },
  },
  {
    accessor: 'author',
    title: 'Author',
  },
  {
    accessor: 'categories',
    title: 'Categories',
    render: ({ categories }) => {
      // Check if categories is an array and has items
      if (!Array.isArray(categories) || categories.length === 0) {
        return '-';
      }
      
      // Map through categories and get the names
      return categories
        .map(category => category.name)
        .join(', ');
    },
  },
  {
    accessor: 'createdDate',
    title: 'Created',
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
    accessor: 'views',
    title: 'Views',
  },
  {
    accessor: 'id',
    title: 'Actions',
    render: ({ id }) => {
      return (
        <Group justify='left' wrap='nowrap'>
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
    title: "Temporary Suspension of production by Millat Tractor in Pakistan",
    attachment: ImgPostVehicle,
    author: "Saad Malik",
    categories: ["Auto News", "Latest News"],
    createdDate: new Date(),
    views: 123,
  },
  {
    id: "11q1",
    title: "Temporary Suspension of production by Millat Tractor in Pakistan",
    attachment: ImgPostVehicle,
    author: "Saad Malik",
    categories: ["Auto News", "Latest News"],
    createdDate: new Date(),
    views: 123,
  },
  {
    id: "1wa11",
    title: "Temporary Suspension of production by Millat Tractor in Pakistan",
    attachment: ImgPostVehicle,
    author: "Saad Malik",
    categories: ["Auto News", "Latest News"],
    createdDate: new Date(),
    views: 123,
  },
  {
    id: "111trlcvf",
    title: "Temporary Suspension of production by Millat Tractor in Pakistan",
    attachment: ImgPostVehicle,
    author: "Saad Malik",
    categories: ["Auto News", "Latest News"],
    createdDate: new Date(),
    views: 123,
  },
  {
    id: "11qrt1",
    title: "Temporary Suspension of production by Millat Tractor in Pakistan",
    attachment: ImgPostVehicle,
    author: "Saad Malik",
    categories: ["Auto News", "Latest News"],
    createdDate: new Date(),
    views: 123,
  },
  {
    id: "1wfa11",
    title: "Temporary Suspension of production by Millat Tractor in Pakistan",
    attachment: ImgPostVehicle,
    author: "Saad Malik",
    categories: ["Auto News", "Latest News"],
    createdDate: new Date(),
    views: 123,
  },
]