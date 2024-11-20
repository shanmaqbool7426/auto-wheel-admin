'use client';
import React from 'react';
import { Box, Grid } from '@mantine/core';
import Search from '@/components/Search';
import FormField from '@/components/FormField';
import DataTable from '@/components/DataTable';
import CustomButton from '@/components/CustomButton';
import useFileManager from './useFileManager';
import { getColumns, mockFolders, mockRecentFiles } from './data';
import { IconPlus } from '@/assets/icons';
import styles from './FileManager.module.css';
import AddLocation from './AddLocation';
import Card from '@/components/Card';
import FolderCard from './FolderCard';
import SidebarCard from './SidebarCard';

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
        </Box>
        <Box className={styles.filterbarRight}>
          <Box className={styles.rightDropdown}>
            <FormField
              type="select"
              name="date"
              data={[
                { value: 'newToOld', label: 'Date, new to old' },
                { value: 'oldToNew', label: 'Date, old to new' },
              ]}
              placeholder="Date, new to old"
              checkIconPosition="right"
              value={filterParams.date}
              onChange={(_value, option) => handleChangeFilter('date', option.value)}
            />
          </Box>
          <Box>
            <CustomButton
              leftSection={<IconPlus />}
              onClick={() => setIsLocationModalOpen(true)}
            >
              Create New
            </CustomButton>
          </Box>
        </Box>
      </Box>
      <Box className={styles.fileManagerRow}>
        <Box className={styles.fileMngContent}>
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

            <Box className={styles.table}>
              <Box className={styles.tableTitle}>Recent Files</Box>
              <DataTable
                columns={columns}
                records={mockRecentFiles || []}
                enablePagination={false}
              />
            </Box>
          </Card>
        </Box>
        <Box className={styles.fileManagerSidebar}>
          <SidebarCard />
        </Box>
      </Box>

      {/* Add New Tag Modal */}
      <AddLocation
        open={isLocationModalOpen}
        setOnClose={setIsLocationModalOpen}
      />
    </>
  )
}
