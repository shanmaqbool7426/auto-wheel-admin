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
  } = useAddTag()

  return (
    <CustomModal
      title="New Tag"
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
              type="textarea"
              rows={6}
              {...form.getInputProps('description')}
            />
          </Grid.Col>
          <Grid.Col span={12}>
            <CustomButton color='#1B84FF' fullWidth type='submit'>
              Add New Tag
            </CustomButton>
          </Grid.Col>

        </Grid>
      </form>
    </CustomModal>
  )
}
