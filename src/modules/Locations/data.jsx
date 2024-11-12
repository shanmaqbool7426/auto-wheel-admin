import Image from 'next/image';
import dayjs from 'dayjs';
import { ActionIcon, Group, Box } from '@mantine/core';
import { ImgPostVehicle } from '@/assets/images';
import { IconEye, IconTrash, IconPencil } from '@/assets/icons';
import styles from './Locations.module.css';

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