'use client';
import React from 'react';
import { Box, Grid } from '@mantine/core';
import Search from '@/components/Search';
import FormField from '@/components/FormField';
import DataTable from '@/components/DataTable';
import CustomButton from '@/components/CustomButton';
import useFileManager from './useFileManager';
import { getColumns, locationsData } from './data';
import { IconPlus } from '@/assets/icons';
import styles from './FileManager.module.css';
import AddLocation from './AddLocation';
import Card from '@/components/Card';
import FolderCard from './FolderCard';
import { mockFolders } from './data';

export default function FileManager() {
  const {
    setSearchBy,
    filterParams,
    handleChangeFilter,
    handleClickEditRow,
    handleClickDeleteRow,
    handleClickDuplicate,
    setIsLocationModalOpen,
    isLocationModalOpen
  } = useFileManager();

  const columns = getColumns(handleClickEditRow, handleClickDeleteRow, handleClickDuplicate)

  return (
    <>
      <Box className={styles.filterbar}>
        <Box className={styles.filterbarLeft}>
          <Box className={styles.searchbar}>
            <Search
              setSearchBy={setSearchBy}
            />
          </Box>
          <Box className={styles.dropdown}>
            <FormField
              type="select"
              name="actions"
              data={[
                { value: 'Bulk Action', label: 'Bulk Action' },
                { value: 'Bulk Action1', label: 'Bulk Action1' },
              ]}
              placeholder="Bulk Action"
              checkIconPosition="right"
              value={filterParams.status}
              onChange={(_value, option) => handleChangeFilter('actions', option.value)}
            />
          </Box>
        </Box>
        <Box className={styles.filterbarRight}>
          <Box>
            <CustomButton
              leftSection={<IconPlus />}
              onClick={() => setIsLocationModalOpen(true)}
            >
              Add Location
            </CustomButton>
          </Box>
        </Box>
      </Box>
      <Card noContentPadding>
        <Box className={styles.fileCardsWrapper}>
          <Grid gutter={20}>
            {mockFolders.map((folder) => (
              <Grid.Col span={4} key={folder.id}>
                <FolderCard data={folder} />
              </Grid.Col>
            ))}
          </Grid>
        </Box>

        <DataTable
          columns={columns}
          records={locationsData || []}
        />
      </Card>

      {/* Add New Tag Modal */}
      <AddLocation
        open={isLocationModalOpen}
        setOnClose={setIsLocationModalOpen}
      />
    </>
  )
}
