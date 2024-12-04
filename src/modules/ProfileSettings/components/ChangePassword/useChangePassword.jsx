import { useForm } from '@mantine/form';
import { notifications } from '@mantine/notifications';
import { useUpdatePasswordMutation } from '@/services/user-management';

export default function useChangePassword() {
  const [updatePassword, { isLoading }] = useUpdatePasswordMutation();

  const form = useForm({
    initialValues: {
      currentPassword: '',
      newPassword: '',
      confirmPassword: '',
    },
    validate: {
      newPassword: (value) => value.length < 6 ? 'Password must be at least 6 characters' : null,
      confirmPassword: (value, values) => 
        value !== values.newPassword ? 'Passwords do not match' : null,
    },
  });

  const handleSubmit = async (values) => {
    if (values.newPassword !== values.confirmPassword) {
      notifications.show({
        title: 'Error',
        message: 'Passwords do not match',
        color: 'red',
      });
      return;
    }

    try {
      await updatePassword({
        currentPassword: values.currentPassword,
        newPassword: values.newPassword,
      }).unwrap();
      
      notifications.show({
        title: 'Success',
        message: 'Password updated successfully',
        color: 'green',
      });
      form.reset();
    } catch (error) {
      notifications.show({
        title: 'Error',
        message: error.data?.message || 'Failed to update password',
        color: 'red',
      });
    }
  };

  return {
    form,
    handleSubmit,
    isLoading
  };
}