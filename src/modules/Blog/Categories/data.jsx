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
            <IconEye />
          </ActionIcon>
        </Group>
      )
    },
  },
]

export const categoriesData = [
  {
    id: "111",
    name: "Analysis & Feature",
    description: "Sed ut perspiciatis unde omnis iste",
    slug: "Sed ut perspiciatis unde omnis iste",
    count: 123,
  },
  {
    id: "112011",
    name: "Modified Cars",
    description: "Sed ut perspiciatis unde omnis iste",
    slug: "Sed ut perspiciatis unde omnis iste",
    count: 123,
  },
  {
    id: "1176541",
    name: "News",
    description: "Sed ut perspiciatis unde omnis iste",
    slug: "Sed ut perspiciatis unde omnis iste",
    count: 123,
  },
  {
    id: "11132",
    name: "Analysis & Feature",
    description: "Sed ut perspiciatis unde omnis iste",
    slug: "Sed ut perspiciatis unde omnis iste",
    count: 123,
  },
  {
    id: "12211",
    name: "Analysis & Feature",
    description: "Sed ut perspiciatis unde omnis iste",
    slug: "Sed ut perspiciatis unde omnis iste",
    count: 123,
  },
  {
    id: "1411",
    name: "Analysis & Feature",
    description: "Sed ut perspiciatis unde omnis iste",
    slug: "Sed ut perspiciatis unde omnis iste",
    count: 123,
  }, ,
]