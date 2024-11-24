import { Box } from '@mantine/core';

export const getColumns = () => [
  {
    accessor: 'name',
    title: 'Country',
    render: ({ name }) => (<Box style={{ textTransform: 'capitalize' }}>{name}</Box>)
  },
  {
    accessor: 'description',
    title: 'Description',
    render: ({ _id }) => (<Box>A country and continent in the Southern Hemisphere.</Box>)
  },
  {
    accessor: 'slug',
    title: 'Slug',
    textAlign: 'center',
  },
  {
    accessor: 'vehicleCount',
    title: 'Count',
    textAlign: 'center',
  },
]
