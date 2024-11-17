'use client';
import React from 'react';
import { Box } from '@mantine/core';
import Search from '@/components/Search';
import FormField from '@/components/FormField';
import DataTable from '@/components/DataTable';
import CustomButton from '@/components/CustomButton';
import useCategories from './useCategories';
import { getColumns, categoriesData } from './data';
import { IconPlus } from '@/assets/icons';
import styles from './Categories.module.css';
import AddCategory from './AddCategory';

export default function Categories() {
  const {
    selectedRecords,
    setSelectedRecords,
    setSearchBy,
    filterParams,
    handleChangeFilter,
    handleClickEditRow,
    handleClickDeleteRow,
    handleClickDuplicate,
    isCategoryModalOpen,
    setCategoryModalOpen,
    categories,
    isLoading,
    handleBulkAction,
  } = useCategories();
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
                { value: 'delete', label: 'Delete' },
                { value: 'duplicate', label: 'Duplicate' },
              ]}
              placeholder="Bulk Action"
              checkIconPosition="right"
            
              onChange={(_value, option) => {
                handleBulkAction(option?.value)
               
              }}
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
              onClick={() => setCategoryModalOpen(true)}
            >
              Add New Category
            </CustomButton>
          </Box>
        </Box>
      </Box>
      <Box>
      <DataTable
          columns={columns}
          records={categories}
          selection
          selectedRecords={selectedRecords}
          onSelectedRecordsChange={setSelectedRecords}
          loading={isLoading}
        />
      </Box>

      {/* Add New Category Modal */}
      <AddCategory
        open={isCategoryModalOpen}
        setOnClose={setCategoryModalOpen}
      />
    </>
  )
}
