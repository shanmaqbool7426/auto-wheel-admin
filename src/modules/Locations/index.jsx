'use client';
import React from 'react';
import { Box } from '@mantine/core';
import Search from '@/components/Search';
import FormField from '@/components/FormField';
import DataTable from '@/components/DataTable';
import CustomButton from '@/components/CustomButton';
import useLocations from './useLocations';
import { getColumns, locationsData } from './data';
import { IconPlus } from '@/assets/icons';
import styles from './Locations.module.css';
import AddLocation from './AddLocation';

export default function Locations() {
  const {
    setSearchBy,
    filterParams,
    handleChangeFilter,
    handleClickEditRow,
    handleClickDeleteRow,
    handleClickDuplicate,
    setIsLocationModalOpen,
    isLocationModalOpen
  } = useLocations();

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
      <Box>
        <DataTable
          columns={columns}
          records={locationsData || []}
        />
      </Box>

      {/* Add New Tag Modal */}
      <AddLocation
        open={isLocationModalOpen}
        setOnClose={setIsLocationModalOpen}
      />
    </>
  )
}
