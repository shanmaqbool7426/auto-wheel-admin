import React from 'react'
import CustomModal from '@/components/CustomModal'
import useAddUser from './useAddUser'
import { Grid, Box } from '@mantine/core'
import FormField from '@/components/FormField'
import CustomButton from '@/components/CustomButton'

export default function AddUser({ open, setOnClose }) {
  const {
    form,
    handleSubmit,
    isLoading,
  } = useAddUser(setOnClose)

  return (
    <CustomModal
      title="Add User"
      open={open}
      onClose={() => setOnClose(false)}
      size='1144'
    >
      <form
        onSubmit={
          form.onSubmit((values) => handleSubmit(values))
        }
      >
        <Grid gutter="30px">
          <Grid.Col span={{ base: 12, sm: 6 }}>
            <FormField
              label="First Name"
              type="text"
              placeholder="First Name"
              {...form.getInputProps('firstName')}
              required
            />
          </Grid.Col>
          <Grid.Col span={{ base: 12, sm: 6 }}>
            <FormField
              label="Last Name"
              type="text"
              placeholder="Last Name"
              {...form.getInputProps('lastName')}
              required
            />
          </Grid.Col>
          <Grid.Col span={{ base: 12, sm: 6 }}>
            <FormField
              label="email"
              type="text"
              placeholder="abc@example.com"
              {...form.getInputProps('email')}
              required
            />
          </Grid.Col>
          <Grid.Col span={{ base: 12, sm: 6 }}>
            <FormField
              label="Role"
              placeholder="Select Role"
              type="select"
              data={[
                { value: 'superAdmin', label: 'Super Admin' },
                { value: 'admin', label: 'Admin' },
                { value: 'moderator', label: 'Moderator' },
                { value: 'dealer', label: 'Dealer' },
                { value: 'user', label: 'User' },
              ]}
              {...form.getInputProps('role')}
              required
            />
          </Grid.Col>
          <Grid.Col span={12}>
            <Box style={{ maxWidth: '530px', margin: '0 auto' }}>
              <CustomButton color='#1B84FF' fullWidth type='submit' loading={isLoading}>
                Add User
              </CustomButton>
            </Box>
          </Grid.Col>

        </Grid>
      </form>
    </CustomModal>
  )
}
