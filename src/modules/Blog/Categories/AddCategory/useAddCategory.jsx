'use client';
import React from 'react';
import { useForm } from '@mantine/form';
import { useAddCategoryMutation } from '@/services/blog/categories';
import { notifications } from '@mantine/notifications';

export default function useAddCategory(handleClose) {
  const [addCategory, { isLoading }] = useAddCategoryMutation();
  // const { categories } = useCategories()

  const form = useForm({
    initialValues: {
      name: '',
      slug: '',
      parentCategory: '',
      description: '',
    },
    validate: {
      name: (value) => (!value ? 'Name is required' : null),
      slug: (value) => (!value ? 'Slug is required' : null),
    },
  });

  const handleSubmit = async (values) => {
    try {
      await addCategory(values).unwrap();
      notifications.show({
        title: 'Success',
        message: 'Category added successfully',
        color: 'green',
      });
      form.reset();
      handleClose(); // Call onClose instead of setOnClose
    } catch (error) {
      notifications.show({
        title: 'Error',
        message: error?.data?.message || 'Something went wrong',
        color: 'red',
      });
    }
  };


  return {
    form,
    handleSubmit,
    isLoading,
  };
}