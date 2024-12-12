import dayjs from 'dayjs';
import { ActionIcon, Group, Box } from '@mantine/core';
import Image from 'next/image';
import styles from './TopPerformingPost.module.css';
import { ImgPostVehicle } from '@/assets/images';

export const columns = [
  {
    accessor: 'post',
    title: 'Post',
    render: ({ title, image, model }) => {
      return (
        <Box className={styles.tableTitle}>
          <Box className={styles.tableTitleImage}>
            <Image src={image} alt="car" width={44} height={36} />
          </Box>
          <Box className={styles.tableTitleText}>
            <Box className={styles.tableTitleTitle}>{title}</Box>
            <Box className={styles.tableTitleModal}>{model}</Box>
          </Box>
        </Box>
      )
    },
  },
  {
    accessor: 'createdDate',
    title: 'Created',
    render: ({ createdDate }) => {
      return (
        <>
          <Box className={styles.createdDate}>
            {dayjs(createdDate).format('DD--MM-YYYY')}
          </Box>
          <Box className={styles.createdTime}>
            {dayjs(createdDate).format('hh:mm A')}
          </Box>
        </>
      )
    },
  },
  {
    accessor: 'type',
    title: 'Type',
  },
  {
    accessor: 'price',
    title: 'Price',
  },
  {
    accessor: 'views',
    title: 'Views',
  },
  {
    accessor: 'clicks',
    title: 'Clicks',
  },
  {
    accessor: 'status',
    title: 'Status',
  },
]

export const followersData = [
  {
    id: "6f9sd34969a0f1",
    title: "USED 2.0 L 2020 KIA Picanto...",
    model: "2016 Ford Escape",
    image: ImgPostVehicle,
    createdDate: new Date(),
    type: 'Car',
    price: "20,000",
    views: "100",
    clicks: "200",
    status: 'Active',
  },
  {
    id: "6f9sd34969a0f2",
    title: "Stock ID 24563",
    model: "2016 Ford Escape",
    image: ImgPostVehicle,
    createdDate: new Date(),
    type: 'Car',
    price: "$ 20,000",
    views: "98",
    clicks: "154",
    status: 'Active',
  },
  {
    id: "6f9sd34969a0f3",
    title: "Stock ID 24563",
    model: "2016 Ford Escape",
    image: ImgPostVehicle,
    createdDate: new Date(),
    type: 'Car',
    price: "$ 20,000",
    views: "98",
    clicks: "154",
    status: 'Active',
  },
  {
    id: "6f9sd34969a0f4",
    title: "Stock ID 24563",
    model: "2016 Ford Escape",
    image: ImgPostVehicle,
    createdDate: new Date(),
    type: 'Car',
    price: "$ 20,000",
    views: "98",
    clicks: "154",
    status: 'Active',
  },
  {
    id: "6f9sd34969a0f5",
    title: "Stock ID 24563",
    model: "2016 Ford Escape",
    image: ImgPostVehicle,
    createdDate: new Date(),
    type: 'Car',
    price: "$ 20,000",
    views: "98",
    clicks: "154",
    status: 'Active',
  },
  {
    id: "6f9sd34969a0f6",
    title: "Stock ID 24563",
    model: "2016 Ford Escape",
    image: ImgPostVehicle,
    createdDate: new Date(),
    type: 'Car',
    price: "$ 20,000",
    views: "98",
    clicks: "154",
    status: 'Active',
  },
]