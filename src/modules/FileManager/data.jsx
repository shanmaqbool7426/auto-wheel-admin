import Image from 'next/image';
import dayjs from 'dayjs';
import { ActionIcon, Group, Box } from '@mantine/core';
import { ImgPostVehicle } from '@/assets/images';
import { IconFolderAction } from '@/assets/icons';
import styles from './FileManager.module.css';

export const mockFolders = [
  {
    id: '1',
    title: 'Design',
    files: 12,
    size: '8GB',
  },
  {
    id: '2',
    title: 'Development',
    files: 12,
    size: '2GB',
  },
  {
    id: '3',
    title: 'Marketing',
    files: 12,
    size: '12GB',
  },
  {
    id: '4',
    title: 'Sales',
    files: 12,
    size: '7GB',
  },
  {
    id: '5',
    title: 'HR',
    files: 12,
    size: '2GB',
  },
]

export const getColumns = () => [
  {
    accessor: 'name',
    title: 'Name',
  },
  {
    accessor: 'updatedOn',
    title: 'Date Modified',
    render: ({ updatedOn }) => {
      return (
        <>
          <Box className={styles.createdDate}>
            {dayjs(updatedOn).format('DD--MM-YYYY')}
          </Box>
          <Box className={styles.createdTime}>
            {dayjs(updatedOn).format('hh:mm A')}
          </Box>
        </>
      )
    },
  },
  {
    accessor: 'size',
    title: 'Size',
    textAlign: 'center',
  },
  {
    accessor: 'id',
    title: '',
    textAlign: 'right',
    render: ({ id }) => {
      return (
        <Group justify='right' wrap='nowrap'>
          <ActionIcon
            size={20}
            className={styles.actionButton}
            onClick={(e) => onClickEdit(e, id)}
          >
            <IconFolderAction />
          </ActionIcon>
        </Group>
      )
    },
  },
]

export const mockRecentFiles = [
  { id: '1', name: 'Project A', updatedOn: new Date(), size: '09 KB' },
  { id: '2', name: 'Image A', updatedOn: new Date(), size: '09 KB' },
];