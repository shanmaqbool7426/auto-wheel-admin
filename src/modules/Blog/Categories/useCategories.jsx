'use client';
import React, { useState } from 'react';
import { useDisclosure } from '@mantine/hooks';
import { useForm } from '@mantine/form';

export default function useCategories() {
  const [isCategoryModalOpen, setCategoryModalOpen] = useState(false);
  const [searchBy, setSearchBy] = useState('');
  const [filterParams, setFilterParams] = useState({
    actions: '',
    news: '',
    date: '',
  });
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
    setSearchBy,
    filterParams,
    handleChangeFilter,
    handleClickEditRow,
    handleClickDeleteRow,
    handleClickDuplicate,
    isCategoryModalOpen,
    setCategoryModalOpen,
  };
}
