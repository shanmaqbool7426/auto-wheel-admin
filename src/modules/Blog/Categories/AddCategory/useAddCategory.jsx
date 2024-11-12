'use client';
import React from 'react';
import { useForm } from '@mantine/form';

export default function useAddCategory() {

  const form = useForm({
    mode: 'uncontrolled',
    initialValues: {
      name: '',
      slug: '',
      parentCategory: '',
      description: '',
    },
  });

  const handleSubmit = (values) => {
    console.log('Form Data:: ', values);
  };

  return {
    form,
    handleSubmit,
  };
}
