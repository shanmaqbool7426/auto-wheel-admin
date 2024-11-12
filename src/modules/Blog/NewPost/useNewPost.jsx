'use client';
import React, { useState } from 'react';
import { useForm } from '@mantine/form';

export default function useNewPost() {

  const form = useForm({
    mode: 'uncontrolled',
    initialValues: {
      title: '',
      description: '',
      visibility: 'private',
      publishOn: '',
      url: '',
      isSticky: true,
      isPending: true,
      author: '12345',
      category: '',
      tags: [],
      featuredImage: null,
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
