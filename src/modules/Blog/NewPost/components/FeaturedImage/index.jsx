import React from 'react';
import { Grid, Box, FileButton, Button } from '@mantine/core';
import Card from '@/components/Card';

export default function FeaturedImage({ form }) {
  return (
    <Card title={'Featured Image'}>
      <Grid gutter="20px">
        <Grid.Col span={12}>
          <FileButton onChange={(file) => form.setFieldValue('featuredImage', file)} accept="image/*">
            {(props) => (
              <Button {...props} fullWidth>
                {form.getValues().featuredImage ? 'Change File' : 'Upload File'}
              </Button>
            )}
          </FileButton>
          {form.getValues().featuredImage && <p>Selected image: {form.getValues().featuredImage.name}</p>}
        </Grid.Col>
      </Grid>
    </Card>
  )
}
