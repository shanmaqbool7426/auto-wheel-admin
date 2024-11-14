import React from 'react';
import { Grid } from '@mantine/core';
import Card from '@/components/Card';
import FormField from '@/components/FormField';
import CustomButton from '@/components/CustomButton';
import TextEditor from '@/components/TextEditor';

export default function PostCard({ form }) {
  const [content, setContent] = React.useState('');

  return (
    <Card>
      <Grid gutter="30px">
        <Grid.Col span={12}>
          <FormField
            label="Title:"
            type="text"
            placeholder="How to Make the Most of Your Holiday Plan"
            {...form.getInputProps('title')}
          />
        </Grid.Col>

        <Grid.Col span={12}>
          <TextEditor
            content={content}
            setContent={setContent}
          />
        </Grid.Col>

        <Grid.Col span={12}>
          <CustomButton color='#1B84FF' fullWidth type='submit'>
            Upload Post
          </CustomButton>
        </Grid.Col>

      </Grid>
    </Card>
  )
}
