import React from 'react'
import CustomModal from '@/components/CustomModal'
import useAddCategory from './useAddCategory'
import { Grid } from '@mantine/core'
import FormField from '@/components/FormField'
import CustomButton from '@/components/CustomButton'
import useCategories from '../useCategories'

export default function AddCategory({ open, setOnClose, selectedCategory, onUpdate }) {
  const { categories } = useCategories();
  
  const {
    form,
    handleSubmit,
    handleNameChange,
    handleSlugChange,
    isLoading,
  } = useAddCategory({ 
    handleClose: () => setOnClose(false),
    selectedCategory,
    onUpdate 
  });

  const categoriesList = categories?.map((category) => ({
    value: category._id,
    label: category.name,
  })) || [];

  return (
    <CustomModal
      title={selectedCategory ? "Edit Category" : "New Category"}
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
              placeholder="Enter category name"
              {...form.getInputProps('name')}
              onChange={handleNameChange}
            />
          </Grid.Col>
          <Grid.Col span={12}>
            <FormField
              label="Slug:"
              type="text"
              placeholder="Enter slug or it will be generated automatically"
              {...form.getInputProps('slug')}
              onChange={handleSlugChange}
            />
          </Grid.Col>
          <Grid.Col span={12}>
            <FormField
              label="Parent Category:"
              type="select"
              placeholder="Select parent category"
              data={categoriesList}
              {...form.getInputProps('parentCategory')}
            />
          </Grid.Col>
          <Grid.Col span={12}>
            <FormField
              label="Description:"
              type="textarea"
              placeholder="Enter category description"
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
              {isLoading 
                ? (selectedCategory ? 'Updating...' : 'Adding...') 
                : (selectedCategory ? 'Update Category' : 'Add New Category')
              }
            </CustomButton>
          </Grid.Col>
        </Grid>
      </form>
    </CustomModal>
  )
}