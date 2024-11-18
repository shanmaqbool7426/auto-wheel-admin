'use client';
import React, { useState } from 'react';
import { useDisclosure } from '@mantine/hooks';
import { useForm } from '@mantine/form';
import { useGetPostsQuery } from '@/services/blog/posts';
import { useRouter } from 'next/navigation';
import { PATH_NAME } from '@/constants/pathname'

export default function useChat() {
  const router = useRouter();
  const { data, error, isLoading } = useGetPostsQuery();
  console.log('data', data);

  const [searchBy, setSearchBy] = useState('');
  const [filterParams, setFilterParams] = useState({
    actions: '',
    news: '',
    date: '',
  });
  const handleChangeFilter = (name, value) => {
    setFilterParams(prev => ({ ...prev, [name]: value }));
  };

  const handleClickExternalLink = (e, id) => {
    e.stopPropagation();
    router.push(`${PATH_NAME.CHAT}/${id}`)
  }

  return {
    setSearchBy,
    filterParams,
    handleChangeFilter,
    handleClickExternalLink
  };
}
