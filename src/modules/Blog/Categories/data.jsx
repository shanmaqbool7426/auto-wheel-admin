import styles from './Categories.module.css';
import Image from 'next/image';
import dayjs from 'dayjs';
import { ActionIcon, Group, Box } from '@mantine/core';
import { ImgPostVehicle } from '@/assets/images';
import { IconEye, IconTrash, IconPencil } from '@/assets/icons';

export const getColumns = (onClickEdit, onClickDelete, onClickDuplicate) => [
  {
    accessor: 'name',
    title: 'Name',
  },
  {
    accessor: 'description',
    title: 'Description',
    textAlign: 'center',
  },
  {
    accessor: 'slug',
    title: 'Slug',
    textAlign: 'center',
  },
  {
    accessor: 'count',
    title: 'Count',
    textAlign: 'center',
  },
  {
    accessor: '_id',
    title: 'Actions',
    textAlign: 'center',
    render: ({ id, slug }) => {
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
            onClick={() => window.location.href = `https://new-auto-wheel.netlify.app/blog/${slug}`}
          >
            <IconEye />
          </ActionIcon>
        </Group>
      )
    },
  },
]

export const categoriesData = [
  {
    _id: "111dsdss",
    name: "Analysis & Feature",
    description: "Sed ut perspiciatis unde omnis iste",
    slug: "Sed ut perspiciatis unde omnis iste",
    count: 123,
  },
  {
    _id: "112sf011",
    name: "Modified Cars",
    description: "Sed ut perspiciatis unde omnis iste",
    slug: "Sed ut perspiciatis unde omnis iste",
    count: 123,
  },
  {
    _id: "117sas6541",
    name: "News",
    description: "Sed ut perspiciatis unde omnis iste",
    slug: "Sed ut perspiciatis unde omnis iste",
    count: 123,
  },
  {
    _id: "11sasa132",
    name: "Analysis & Feature",
    description: "Sed ut perspiciatis unde omnis iste",
    slug: "Sed ut perspiciatis unde omnis iste",
    count: 123,
  },
  {
    _id: "122sasa11",
    name: "Analysis & Feature",
    description: "Sed ut perspiciatis unde omnis iste",
    slug: "Sed ut perspiciatis unde omnis iste",
    count: 123,
  },
  {
    _id: "14asas11",
    name: "Analysis & Feature",
    description: "Sed ut perspiciatis unde omnis iste",
    slug: "Sed ut perspiciatis unde omnis iste",
    count: 123,
  },
]