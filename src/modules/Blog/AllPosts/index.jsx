'use client';
import React from 'react';
import styles from './AllPosts.module.css';
import { Box } from '@mantine/core';
import Search from '@/components/Search';
import FormField from '@/components/FormField';
import DataTable from '@/components/DataTable';
import CustomButton from '@/components/CustomButton';
import useAllPosts from './useAllPosts';
import { getColumns, postsData } from './data';
import { IconPlus } from '@/assets/icons';

export default function AllPosts() {
  const {
    setSearchBy,
    filterParams,
    handleChangeFilter,
    handleClickEditRow,
    handleClickDeleteRow,
    handleClickDuplicate,
  } = useAllPosts();

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
          <Box className={styles.dropdown}>
            <FormField
              type="select"
              name="news"
              data={[
                { value: 'Auto News', label: 'Auto News' },
                { value: 'Latest News', label: 'Latest News' },
              ]}
              placeholder="Auto News"
              checkIconPosition="right"
              value={filterParams.news}
              onChange={(_value, option) => handleChangeFilter('news', option.value)}
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
            >
              Create Post
            </CustomButton>
          </Box>
        </Box>
      </Box>
      <Box>
        <DataTable
          columns={columns}
          records={postsData || []}
        />
      </Box>
    </>
  )
}
