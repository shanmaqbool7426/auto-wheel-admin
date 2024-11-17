import React, { useEffect } from 'react';
import { Grid } from '@mantine/core';
import Card from '@/components/Card';
import FormField from '@/components/FormField';
import CustomButton from '@/components/CustomButton';
import TextEditor from '@/components/TextEditor';
import { generateSlug } from '@/utils/helpers';

export default function PostCard({ form, isLoading }) {
  useEffect(() => {

      const slug = generateSlug(form.values.title);
      console.log('slug: ', slug)
      form.setFieldValue('url', `http://example.com/${slug}`);
  
  }, [form.values.title]);

  console.log('form.values: ', form.values.title)

  return (
    <Card>
      <Grid gutter="30px">
        <Grid.Col span={12}>
          <FormField
            label="Title:"
            type="text"
            placeholder="How to Make the Most of Your Holiday Plan"
            required
            {...form.getInputProps('title')}
          />
        </Grid.Col>

        <Grid.Col span={12}>
          <TextEditor
            content={form.values.content}
            setContent={(value) => form.setFieldValue('content', value)}
          />
          {form.errors.content && (
            <div style={{ color: 'red', fontSize: '12px', marginTop: '5px' }}>
              {form.errors.content}
            </div>
          )}
        </Grid.Col>

        <Grid.Col span={12}>
          <CustomButton 
            color='#1B84FF' 
            fullWidth 
            type='submit'
            loading={isLoading}
          >
            {isLoading ? 'Creating Post...' : 'Create Post'}
          </CustomButton>
        </Grid.Col>
      </Grid>
    </Card>
  );
}