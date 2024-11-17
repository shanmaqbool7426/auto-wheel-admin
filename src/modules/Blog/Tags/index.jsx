'use client';
import React from 'react';
import { Box } from '@mantine/core';
import Search from '@/components/Search';
import FormField from '@/components/FormField';
import DataTable from '@/components/DataTable';
import CustomButton from '@/components/CustomButton';
import useTags from './useTags';
import { getColumns, data } from './data';
import { IconPlus } from '@/assets/icons';
import styles from './Tags.module.css';
import AddTag from './AddTag';


export default function Tags() {
  const {
    selectedRecords,
    setSelectedRecords,
    isTagModalOpen,
    setIsTagModalOpen,
    searchBy,
    setSearchBy,
    filterParams,
    handleChangeFilter,
    handleClickEditRow,
    handleClickDeleteRow,
    handleBulkAction,
    tags,
    isLoading,
  } = useTags();


  
  const columns = getColumns(handleClickEditRow, handleClickDeleteRow);

  return (
    <>
      <Box className={styles.filterbar}>
        <Box className={styles.filterbarLeft}>
          <Box className={styles.searchbar}>
            <Search
              value={searchBy}
              setSearchBy={setSearchBy}
              onChange={(e) => setSearchBy(e.target.value)}
              placeholder="Search tags..."
            />
          </Box>
          <Box className={styles.dropdown}>
            <FormField
              type="select"
              name="actions"
              data={[
                { value: 'delete', label: 'Delete Selected' },
              ]}
              placeholder="Bulk Action"
              onChange={(value) => handleBulkAction(value)}
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
              placeholder="Sort by date"
              value={filterParams.date}
              onChange={(value) => handleChangeFilter('date', value)}
            />
          </Box>
          <CustomButton
            leftSection={<IconPlus />}
            onClick={() => setIsTagModalOpen(true)}
          >
            Add New Tag
          </CustomButton>
        </Box>
      </Box>

      <DataTable
        columns={columns}
        records={tags}
        selection
        selectedRecords={selectedRecords}
        onSelectedRecordsChange={setSelectedRecords}
        loading={isLoading}
      />

      <AddTag
        open={isTagModalOpen}
        setOnClose={setIsTagModalOpen}
      />
    </>
  );
}
