import React from 'react'
import CustomModal from '@/components/CustomModal'
import useAddCategory from './useAddCategory'
import { Grid, Group, Button } from '@mantine/core'
import FormField from '@/components/FormField'
import CustomButton from '@/components/CustomButton'

export default function AddCategory({ open, setOnClose }) {
  const {
    form,
    handleSubmit,
  } = useAddCategory()

  return (
    <CustomModal
      title="New Category"
      open={open}
      onClose={() => setOnClose(false)}
    >
      <form
        onSubmit={
          form.onSubmit((values) => handleSubmit(values))
        }
      >
        <Grid gutter="30px">
          <Grid.Col span={12}>
            <FormField
              label="Name:"
              type="text"
              placeholder="How to Make the Most of Your Holiday Plan"
              {...form.getInputProps('name')}
            />
          </Grid.Col>
          <Grid.Col span={12}>
            <FormField
              label="Slug:"
              type="text"
              placeholder="How to Make the Most of Your Holiday Plan"
              {...form.getInputProps('slug')}
            />
          </Grid.Col>
          <Grid.Col span={12}>
            <FormField
              label="Parent Category:"
              placeholder="How to Make the Most of Your Holiday Plan"
              type="select"
              data={[
                { value: 'Parent 1', label: 'Parent 1' },
                { value: 'Parent 2', label: 'Parent 2' },
                { value: 'Parent 3', label: 'Parent 3' },
                { value: 'Parent 4', label: 'Parent 4' },
              ]}
              {...form.getInputProps('parentCategory')}
            />
          </Grid.Col>
          <Grid.Col span={12}>
            <FormField
              type="textarea"
              rows={6}
              {...form.getInputProps('description')}
            />
          </Grid.Col>
          <Grid.Col span={12}>
            <CustomButton color='#1B84FF' fullWidth type='submit'>
              Add New Category
            </CustomButton>
          </Grid.Col>

        </Grid>
      </form>
    </CustomModal>
  )
}
