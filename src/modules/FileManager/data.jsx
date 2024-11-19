import Image from 'next/image';
import dayjs from 'dayjs';
import { ActionIcon, Group, Box } from '@mantine/core';
import { ImgPostVehicle } from '@/assets/images';
import { IconEye, IconTrash, IconPencil } from '@/assets/icons';
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
    accessor: 'country',
    title: 'Country',
    render: ({ country }) => (<Box>{country}</Box>)
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
]

export const locationsData = [
  {
    id: "111",
    country: "United States",
    description: "Sed ut perspiciatis unde omnis iste",
    slug: "Sed ut perspiciatis unde omnis iste",
    count: 123,
  },
  {
    id: "112011",
    country: "Alaska",
    description: "Sed ut perspiciatis unde omnis iste",
    slug: "Sed ut perspiciatis unde omnis iste",
    count: 123,
  },
  {
    id: "1176541",
    country: "States",
    description: "Sed ut perspiciatis unde omnis iste",
    slug: "Sed ut perspiciatis unde omnis iste",
    count: 123,
  },
  {
    id: "11132",
    country: "United States",
    description: "Sed ut perspiciatis unde omnis iste",
    slug: "Sed ut perspiciatis unde omnis iste",
    count: 123,
  },
  {
    id: "12211",
    country: "United States",
    description: "Sed ut perspiciatis unde omnis iste",
    slug: "Sed ut perspiciatis unde omnis iste",
    count: 123,
  },
  {
    id: "1411",
    country: "United States",
    description: "Sed ut perspiciatis unde omnis iste",
    slug: "Sed ut perspiciatis unde omnis iste",
    count: 123,
  }, ,
]