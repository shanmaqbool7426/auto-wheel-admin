import React from 'react';
import { Grid, Box, FileButton, Button, Image } from '@mantine/core';
import Card from '@/components/Card';

export default function FeaturedImage({ form }) {
  const handleFileChange = (file) => {
    if (file) {
      form.setFieldValue('imageUrl', file);
    }
  };

  return (
    <Card title={'Featured Image'}>
      <Grid gutter="20px">
        <Grid.Col span={12}>
          <FileButton 
            onChange={handleFileChange} 
            accept="image/png,image/jpeg,image/jpg"
          >
            {(props) => (
              <Button {...props} fullWidth>
                {form.values.imageUrl ? 'Change Image' : 'Upload Image'}
              </Button>
            )}
          </FileButton>
          
          {form.errors.imageUrl && (
            <div style={{ color: 'red', fontSize: '12px', marginTop: '5px' }}>
              {form.errors.imageUrl}
            </div>
          )}

          {form.values.imageUrl && (
            <Box mt="md">
              <Image
                src={URL.createObjectURL(form.values.imageUrl)}
                alt="Preview"
                radius="md"
                height={200}
                fit="cover"
              />
            </Box>
          )}
        </Grid.Col>
      </Grid>
    </Card>
  );
}