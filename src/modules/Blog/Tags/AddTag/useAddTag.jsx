'use client';
import { useForm } from '@mantine/form';
import { useAddTagMutation } from '@/services/blog/tags';
import { notifications } from '@mantine/notifications';

export default function useAddTag({ onClose }) {
  const [addTag, { isLoading }] = useAddTagMutation();

  const form = useForm({
    initialValues: {
      name: '',
      slug: '',
      description: '',
    },
    validate: {
      name: (value) => (!value ? 'Name is required' : null),
      slug: (value) => (!value ? 'Slug is required' : null),
    },
  });

  const handleSubmit = async (values) => {
    try {
      await addTag(values).unwrap();
      notifications.show({
        title: 'Success',
        message: 'Tag added successfully',
        color: 'green',
      });
      form.reset();
      onClose();
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