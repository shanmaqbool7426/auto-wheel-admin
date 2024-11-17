import React from 'react';
import { Grid, Box, MultiSelect, TagsInput } from '@mantine/core';
import Card from '@/components/Card';
import FormField from '@/components/FormField';
import styles from './PostCategories.module.css';

export default function PostCategories({ form, categoriesData, tagsData }) {
  const categories = categoriesData?.map((category) => ({
    value: category._id,
    label: category.name,
  }));

  const tags = tagsData?.map((tag) => ({
    value: tag._id,
    label: tag.name,
  }));

  // Convert IDs to labels for display
  const getTagLabels = () => {
    return form.values.tags.map(tagId => {
      const tag = tagsData?.find(t => t._id === tagId);
      return tag ? tag.name : tagId;
    });
  };

  // Handle tag changes to store IDs
  const handleTagChange = (newTagLabels) => {
    const formattedTags = newTagLabels.map(tagLabel => {
      const existingTag = tagsData?.find(t => t.name === tagLabel);
      return existingTag ? existingTag._id : tagLabel;
    });
    form.setFieldValue('tags', formattedTags);
  };

  return (
    <Card title={'Categories'}>
      <Grid gutter="20px">
        <Grid.Col span={12}>
          <FormField
            label="Categories"
            type="select"
            placeholder="Select Categories"
            data={categories}
            required
            multiple
            {...form.getInputProps('categories')}
            styles={{
              input: {
                minHeight: '38px',
                border: '1px solid #E9ECEF',
                borderRadius: '4px',
                '&:focus': {
                  borderColor: '#1B84FF',
                },
              },
            }}
          />
          {form.errors.categories && (
            <div style={{ color: 'red', fontSize: '12px', marginTop: '5px' }}>
              {form.errors.categories}
            </div>
          )}
        </Grid.Col>

        <Grid.Col span={12}>
          <TagsInput
            label="Tags"
            placeholder="Enter tag and press enter"
            data={tags?.map(tag => tag.label) || []}
            value={getTagLabels()} // Display labels
            onChange={handleTagChange} // Store IDs
            splitChars={[',', ' ', 'Enter']}
            maxTags={10}
            clearable
            styles={{
              input: {
                minHeight: '38px',
                border: '1px solid #E9ECEF',
                borderRadius: '4px',
                '&:focus': {
                  borderColor: '#1B84FF',
                },
              },
              tag: {
                backgroundColor: '#F1F3F5',
                color: '#000',
                '&[data-disabled]': { backgroundColor: '#F1F3F5' },
              }
            }}
          />
        </Grid.Col>
      </Grid>
    </Card>
  );
}