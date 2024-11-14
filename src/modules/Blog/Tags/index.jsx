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
    tagsData,
    errorTags,
    loadingTags,
    setSearchBy,
    filterParams,
    handleChangeFilter,
    handleClickEditRow,
    handleClickDeleteRow,
    handleClickDuplicate,
    setIsTagModalOpen,
    isTagModalOpen
  } = useTags();

  const columns = getColumns(handleClickEditRow, handleClickDeleteRow, handleClickDuplicate);

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
              onClick={() => setIsTagModalOpen(true)}
            >
              Add New Tag
            </CustomButton>
          </Box>
        </Box>
      </Box>
      <Box>
        <DataTable
          columns={columns}
          records={tagsData?.data || []}
          fetching={loadingTags && !tagsData?.data.length}
          selection
          selectedRecords={selectedRecords}
          onSelectedRecordsChange={setSelectedRecords}
        />
      </Box>

      {/* Add New Tag Modal */}
      <AddTag
        open={isTagModalOpen}
        setOnClose={setIsTagModalOpen}
      />
    </>
  )
}
