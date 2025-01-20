// import Image from 'next/image';
// import dayjs from 'dayjs';
// import { ActionIcon, Group, Box, Badge } from '@mantine/core';
// // Import icons from @tabler/icons-react
// import { IconEdit, IconTrash, IconEye } from '@tabler/icons-react';
// import { useRouter } from 'next/navigation';
// import styles from './NewVehicles.module.css';

// export const getColumns = (onClickEdit, onClickDelete, onClickView) => {
//     const router = useRouter();
//     return [
//         {
//             accessor: 'image',
//             title: 'Vehicle',
//             render: (row) => (
//                 <Box className={styles.vehicle}>
//                     <Box className={styles.vehicleImage}>
//                         {/* <Image 
//                   src={row.defaultImage || '/placeholder-vehicle.png'} 
//                   alt={`${row.make} ${row.model}`} 
//                   width={80} 
//                   height={60} 
//                   style={{ objectFit: 'cover' }}
//                 /> */}
//                     </Box>
//                     <Box className={styles.vehicleInfo}>
//                         <Box className={styles.vehicleName}>{row.make} {row.model}</Box>
//                         <Box className={styles.vehicleVariant}>{row.variant}</Box>
//                     </Box>
//                 </Box>
//             ),
//         },
//         {
//             accessor: 'type',
//             title: 'Type',
//             render: (row) => (
//                 <Badge
//                     color={row.type === 'car' ? 'blue' : row.type === 'bike' ? 'green' : 'orange'}
//                 >
//                     {row.type.charAt(0).toUpperCase() + row.type.slice(1)}
//                 </Badge>
//             )
//         },
//         {
//             accessor: 'price',
//             title: 'Price Range',
//             render: (row) => (
//                 <Box>
//                     {row.minPrice && row.maxPrice ? (
//                         `₹${row.minPrice.toLocaleString()} - ₹${row.maxPrice.toLocaleString()}`
//                     ) : 'Price on Request'}
//                 </Box>
//             )
//         },
//         {
//             accessor: 'createdAt',
//             title: 'Added Date',
//             render: (row) => (
//                 <>
//                     <Box className={styles.createdDate}>
//                         {dayjs(row.createdAt).format('DD-MM-YYYY')}
//                     </Box>
//                     <Box className={styles.createdTime}>
//                         {dayjs(row.createdAt).format('hh:mm A')}
//                     </Box>
//                 </>
//             ),
//         },
//         {
//             accessor: 'views',
//             title: 'Views',
//             render: (row) => row.views || 0,
//         },
//         {
//             accessor: 'actions',
//             title: 'Actions',
//             textAlign: 'center',
//             render: (row) => (
//                 <Group justify="center" gap="xs">
//                     <ActionIcon
//                         size="sm"
//                         variant="subtle"
//                         color="blue"
//                         onClick={() => router.push(`https://new-auto-wheel.netlify.app/new-vehicle/${row.slug}`)}
//                     >
//                         <IconEye size={16} />
//                     </ActionIcon>
//                     <ActionIcon
//                         size="sm"
//                         variant="subtle"
//                         color="blue"
//                         onClick={() => onClickEdit(row._id)}
//                     >
//                         <IconEdit size={16} />
//                     </ActionIcon>
//                     <ActionIcon
//                         size="sm"
//                         variant="subtle"
//                         color="red"
//                         onClick={() => onClickDelete(row._id)}
//                     >
//                         <IconTrash size={16} />
//                     </ActionIcon>
//                 </Group>
//             ),
//         },
//     ];
// }


import React from 'react'

const NewVehiclesData = () => {
  return (
    <div>NewVehicles.data</div>
  )
}

export default NewVehicles.data
