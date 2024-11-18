import React from 'react'
import CustomModal from '@/components/CustomModal'
import useAddTag from './useAddTag'
import { Grid } from '@mantine/core'
import FormField from '@/components/FormField'
import CustomButton from '@/components/CustomButton'

export default function AddTag({ open, setOnClose }) {
  const {
    form,
    handleSubmit,
    isLoading,
  } = useAddTag({ onClose: () => setOnClose(false) });

  return (
    <CustomModal
      title="New Tag"
      open={open}
      onClose={() => {
        setOnClose(false);
        form.reset();
      }}
    >
      <form onSubmit={form.onSubmit(handleSubmit)}>
        <Grid gutter="30px">
          <Grid.Col span={12}>
            <FormField
              label="Name:"
              type="text"
              placeholder="Enter tag name"
              {...form.getInputProps('name')}
            />
          </Grid.Col>
          <Grid.Col span={12}>
            <FormField
              label="Slug:"
              type="text"
              placeholder="Enter tag slug"
              {...form.getInputProps('slug')}
            />
          </Grid.Col>
          <Grid.Col span={12}>
            <FormField
              label="Description:"
              type="textarea"
              placeholder="Enter tag description"
              rows={6}
              {...form.getInputProps('description')}
            />
          </Grid.Col>
          <Grid.Col span={12}>
            <CustomButton 
              color='#1B84FF' 
              fullWidth 
              type='submit'
              loading={isLoading}
              disabled={isLoading}
            >
              {isLoading ? 'Adding Tag...' : 'Add New Tag'}
            </CustomButton>
          </Grid.Col>
        </Grid>
      </form>
    </CustomModal>
  )
}