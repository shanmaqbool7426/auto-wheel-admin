'use client';
import React from 'react';
import { Box, ActionIcon, Drawer, Grid, Autocomplete } from '@mantine/core';
import Search from '@/components/Search';
import FormField from '@/components/FormField';
import DataTable from '@/components/DataTable';
import CustomButton from '@/components/CustomButton';
import useLocations from './useLocations';
import { getColumns } from './data';
import { IconPlus } from '@/assets/icons';
import styles from './Locations.module.css';
import AddLocation from './AddLocation';
import ConfirmationModal from '@/components/ConfirmationModal';
import { IconFilter } from '@tabler/icons-react';


export default function Locations() {
  const {
    page,
    setPage,
    selectedRecords,
    setSelectedRecords,
    locationsData,
    loadingGetLocation,
    fetchingGetLocation,
    setSearchBy,
    setIsLocationModalOpen,
    isLocationModalOpen,

    openBulkDeleteModal,
    handleCloseBulkDeleteModal,
    handleBulkAction,
    handleBulkDeleteLocations,
    loadingBulkDelete,

    selectedCountry,
    selectedState,
    selectedCity,
    handleCountryChange,
    handleStateChange,
    Country,
    cities,
    states,
    openFilterDrawer,
    handleOpenDrawer,
    handleCloseDrawer,
  } = useLocations();

  const columns = getColumns();

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
              disabled={selectedRecords?.length === 0}
              type="select"
              name="actions"
              data={[
                { value: 'delete', label: 'Delete' },
              ]}
              placeholder="Bulk Action"
              checkIconPosition="right"
              onChange={(_value, option) => handleBulkAction(option.value)}
            />
          </Box>
        </Box>
        <Box className={styles.filterbarRight}>
          <ActionIcon variant="outline" color='#ced4da' onClick={handleOpenDrawer}>
            <IconFilter style={{ width: '70%', height: '70%' }} stroke={1.5} />
          </ActionIcon>
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
          records={locationsData?.data?.locations || []}
          fetching={loadingGetLocation || fetchingGetLocation}
          selection
          selectedRecords={selectedRecords}
          onSelectedRecordsChange={setSelectedRecords}
          totalRecords={locationsData?.data?.pagination?.totalItems || 0}
          page={page}
          onPageChange={setPage}
        />
      </Box>

      {/* Add New Tag Modal */}
      <AddLocation
        open={isLocationModalOpen}
        setOnClose={setIsLocationModalOpen}
      />

      <ConfirmationModal
        title="Delete Location"
        message="Are you sure you want to delete selected locations?"
        open={openBulkDeleteModal}
        onClose={handleCloseBulkDeleteModal}
        onSubmit={handleBulkDeleteLocations}
        isLoading={loadingBulkDelete}
      />

      <Drawer
        title="Location Filters"
        opened={openFilterDrawer}
        onClose={handleCloseDrawer}
        position="right"
        classNames={{
          content: styles.drawerContent,
          title: styles.drawerTitle,
        }}
      >
        <form>
          <Grid gutter="24px">

            <Grid.Col span={12}>
              <Autocomplete
                label="Country"
                placeholder="Select country"
                data={Country.getAllCountries().map((country) => ({
                  value: country.isoCode,
                  label: country.name,
                }))}
                value={selectedCountry}
                onChange={handleCountryChange}
              />
            </Grid.Col>

            <Grid.Col span={12}>
              <Autocomplete
                label="State"
                placeholder="Select state"
                data={states}
                value={selectedState}
                onChange={handleStateChange}
                disabled={!selectedCountry}
              />
            </Grid.Col>

            <Grid.Col span={12}>
              <Autocomplete
                label="City"
                placeholder="Select city"
                data={cities}
                value={selectedCity}
                onChange={(city) => setSelectedCity(city)}
                disabled={!selectedState}
              />
            </Grid.Col>

            <Grid.Col span={12}>
              <CustomButton color='#1B84FF' fullWidth type='submit'>
                Apply
              </CustomButton>
            </Grid.Col>

          </Grid>
        </form>
      </Drawer>
    </>
  )
}
