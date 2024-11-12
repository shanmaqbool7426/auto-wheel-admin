'use client';
import React, { useState, useEffect } from 'react';
import { useDisclosure } from '@mantine/hooks';
import { useForm } from '@mantine/form';
import { useGetTagsQuery } from '@/services/blog/tags';

export default function useTag() {
  const { data: tagsData, error: errorTags, isLoading: loadingTags } = useGetTagsQuery();

  const [isTagModalOpen, setIsTagModalOpen] = useState(false);
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
  };
}
