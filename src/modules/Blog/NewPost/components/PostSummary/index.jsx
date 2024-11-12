import React from 'react';
import { Grid } from '@mantine/core';
import Card from '@/components/Card';
import FormField from '@/components/FormField';
import CustomButton from '@/components/CustomButton';

export default function PostSummary({ form }) {
  return (
    <Card title={'Summary'}>
      <Grid gutter="20px">
        <Grid.Col span={12}>
          <FormField
            label="Visibility"
            type="select"
            placeholder="Visibility"
            data={[
              { value: 'private', label: 'Private' },
              { value: 'draft', label: 'Draft' },
            ]}
            {...form.getInputProps('visibility')}
          />
        </Grid.Col>
        <Grid.Col span={12}>
          <FormField
            label="Publish"
            type="datetime"
            placeholder="Publish On"
            {...form.getInputProps('publishOn')}
          />
        </Grid.Col>
        <Grid.Col span={12}>
          <FormField
            label="URL"
            type="text"
            placeholder="https://example.com"
            {...form.getInputProps('url')}
          />
        </Grid.Col>
        <Grid.Col span={12}>
          <FormField
            label="Stick to the top of the blog"
            type="checkbox"
            {...form.getInputProps('isSticky', { type: 'checkbox' })}
          />
        </Grid.Col>
        <Grid.Col span={12}>
          <FormField
            label="Pending review"
            type="checkbox"
            {...form.getInputProps('isPending', { type: 'checkbox' })}
          />
        </Grid.Col>
        <Grid.Col span={12}>
          <FormField
            label="Author"
            type="select"
            placeholder="Author"
            data={[
              { value: '12345', label: 'Shan Maqbool' },
              { value: '1234', label: 'Waqas Afzal' },
            ]}
            {...form.getInputProps('author')}
          />
        </Grid.Col>
      </Grid>
    </Card>
  )
}
