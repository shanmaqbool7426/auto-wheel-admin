'use client';
import React from 'react';
import styles from './UserRoles.module.css';
import { Box, Title, Grid } from '@mantine/core';
import Search from '@/components/Search';
import FormField from '@/components/FormField';
import DataTable from '@/components/DataTable';
import CustomButton from '@/components/CustomButton';
import useUserRoles from './useUserRoles';
import { IconPlus } from '@/assets/icons';
import UpdateRole from './UpdateRole';
import Card from '@/components/Card';
import RoleCard from './RoleCard';
import { rolesData } from './UserRoles.data';

export default function UserRoles() {
  const {
    isOpenModal,
    setIsOpenModal,
  } = useUserRoles();


  return (
    <>
      <Card>
        <Box className={styles.pageHeader}>
          <Title order={2} className={styles.pageTitle}>User Role</Title>
        </Box>
        <Box className={styles.roleCards}>
          <Grid gutter="20">
            {rolesData.map((role) => (
              <Grid.Col span={4} key={role.id}>
                <RoleCard
                  data={role}
                  handlerEditRole={() => setIsOpenModal(true)}
                />
              </Grid.Col>
            ))}

          </Grid>
        </Box>
      </Card>

      <UpdateRole
        open={isOpenModal}
        setOnClose={setIsOpenModal}
      />
    </>
  )
}
