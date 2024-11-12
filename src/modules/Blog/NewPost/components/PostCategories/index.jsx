import React from 'react';
import { Grid, Box } from '@mantine/core';
import Card from '@/components/Card';
import FormField from '@/components/FormField';
import CustomButton from '@/components/CustomButton';
import styles from './PostCategories.module.css';

export default function PostCategories({ form }) {
  return (
    <Card title={'Categories'}>
      <Grid gutter="20px">
        <Grid.Col span={12}>
          <FormField
            label="Search Categories"
            type="select"
            placeholder="Search Categories"
            data={[
              { value: 'bikes', label: 'Bikes' },
              { value: 'cars', label: 'Cars' },
            ]}
            {...form.getInputProps('category')}
          />
        </Grid.Col>

        <Grid.Col span={12}>
          <Box className={styles.addNewCatgBtn}>Add New Category</Box>
        </Grid.Col>

        <Grid.Col span={12}>
          <FormField
            label="Tags"
            type="tags"
            placeholder="Select Tags"
            data={[
              { value: '12345', label: 'Shan Maqbool' },
              { value: '1234', label: 'Waqas Afzal' },
            ]}
            {...form.getInputProps('tags')}
          />
        </Grid.Col>

      </Grid>
    </Card>
  )
}
