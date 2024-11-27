'use client';
import { useState, useEffect } from 'react';
import { useGetUsersQuery } from '@/services/user-management';
import { PAGE_SIZE } from '@/constants/pagination';

export default function useComments() {
  const [isOpenAddUserModal, setIsOpenAddUserModal] = useState(false);
  const [searchBy, setSearchBy] = useState();
  const [page, setPage] = useState(1);
  const [selectedRecords, setSelectedRecords] = useState([]);
  const initParams = {
    sortOrder: 'desc',
    page,
    limit: PAGE_SIZE,
  }
  const [filterParams, setFilterParams] = useState(initParams);
  const {
    data: usersData,
    isLoading: loadingGetUsers,
    isFetching: fetchingGetUsers
  } = useGetUsersQuery(filterParams);

  useEffect(() => {
    if (fetchingGetUsers) {
      setSelectedRecords([]);
    }
  }, [fetchingGetUsers]);

  // Search query parameters
  useEffect(() => {
    setFilterParams(prev => ({ ...prev, search: searchBy }));
  }, [searchBy]);

  useEffect(() => {
    setFilterParams(prev => ({ ...prev, page: page }));
  }, [page]);

  // handle change sortOrder
  const handleChangeFilter = (name, value) => {
    setFilterParams(prev => ({ ...prev, [name]: value }));
  };


  const handleClickEditRow = (e, id) => {
    e.stopPropagation();
    console.log('Edit Row', id);
    alert(`Edit Row ${id}`);
  }

  const handleClickDeleteRow = (e, id) => {
    e.stopPropagation();
    alert(`Delete Row ${id}`);
  }

  const handleClickDuplicate = (e, id) => {
    e.stopPropagation();
    alert(`Toggle Row ${id}`);
  }

  return {
    page,
    setPage,

    selectedRecords,
    setSelectedRecords,

    usersData,
    loadingGetUsers,
    fetchingGetUsers,

    setSearchBy,
    filterParams,

    handleChangeFilter,
    handleClickEditRow,
    handleClickDeleteRow,
    handleClickDuplicate,
    isOpenAddUserModal,
    setIsOpenAddUserModal,
  };
}
