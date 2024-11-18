'use client';
import React from 'react';
import { Grid, Button, Box, Checkbox } from '@mantine/core';
import Card from '@/components/Card';
import FormField from '@/components/FormField';
import usePersonalInformation from './usePersonalInformation';
import styles from './PersonalInformation.module.css';
import CustomButton from '@/components/CustomButton';

export default function PersonalInformation() {

  const {
    form,
    handleSubmit
  } = usePersonalInformation();

  return (
    <Card title="Personal Information">
      <form
        onSubmit={
          form.onSubmit((values) => handleSubmit(values))
        }
      >
        <Grid gutter="20px">
          <Grid.Col span={6}>
            <FormField
              label="First Name"
              type="text"
              {...form.getInputProps('firstName')}
            />
          </Grid.Col>
          <Grid.Col span={6}>
            <FormField
              label="Last Name"
              type="text"
              {...form.getInputProps('lastName')}
            />
          </Grid.Col>
          <Grid.Col span={6}>
            <FormField
              label="Phone Number"
              type="text"
              {...form.getInputProps('phoneNumber')}
            />

            <Box className={styles.checkboxWrap}>
              <Checkbox
                label="I have a WhatsApp account with this number"
                {...form.getInputProps('whatsAppOnThisNumber', { type: 'checkbox' })}
                size="12px"
                color="#1B84FF"
                classNames={{
                  label: styles.labelCheckbox,
                  icon: styles.iconCheckbox,
                }}
              />
            </Box>
          </Grid.Col>
          <Grid.Col span={6}>
            <FormField
              label="email"
              type="text"
              {...form.getInputProps('email')}
            />

            <Box className={styles.checkboxWrap}>
              <Checkbox
                label="Show Email Address on my Profile"
                {...form.getInputProps('showEmail', { type: 'checkbox' })}
                size="12px"
                color="#1B84FF"
                classNames={{
                  label: styles.labelCheckbox,
                  icon: styles.iconCheckbox,
                }}
              />
            </Box>
          </Grid.Col>
        </Grid>

        <Box className={styles.buttonHolder}>
          <CustomButton
            color='#1B84FF'
            fullWidth
            type="submit"
          >
            Save
          </CustomButton>
        </Box>
      </form>
    </Card>
  )
}
