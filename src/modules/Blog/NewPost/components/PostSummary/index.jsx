import React from 'react';
import { Grid } from '@mantine/core';
import Card from '@/components/Card';
import FormField from '@/components/FormField';
import CustomButton from '@/components/CustomButton';

export default function PostSummary({ form }) {
  const isScheduled = form.values.visibility === 'Scheduled';

  return (
    <Card title={'Summary'}>
      <Grid gutter="20px">
        <Grid.Col span={12}>
          <FormField
            label="Visibility"
            type="select"
            placeholder="Visibility"
            data={[
              { value: 'Private', label: 'Private' },
              { value: 'Draft', label: 'Draft' },
              { value: 'Scheduled', label: 'Scheduled' },
            ]}
            {...form.getInputProps('visibility')}
          />
        </Grid.Col>
        <Grid.Col span={12}>
        {isScheduled && (
          <Grid.Col span={12}>
            <FormField
              label="Schedule Date"
              type="datetime"
              placeholder="Select date and time"
              required={isScheduled}
              {...form.getInputProps('scheduledAt')}
              clearable={false}
              minDate={new Date()} // Can't schedule in the past
            />
          </Grid.Col>
        )}
        </Grid.Col>
             <Grid.Col span={12}>
          <FormField
            label="URL"
            type="text"
            placeholder="http://example.com/your-post-title"
            {...form.getInputProps('url')}
             // Make it read-only
            styles={{
              input: {
                color: '#666',
                backgroundColor: '#f9f9f9',
              }
            }}
          />
          <div style={{ fontSize: '12px', color: '#666', marginTop: '4px' }}>
            URL is automatically generated from the title
          </div>
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
