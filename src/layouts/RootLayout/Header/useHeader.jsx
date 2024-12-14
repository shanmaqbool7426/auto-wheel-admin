import React, { useState, useEffect } from 'react';
import { usePathname, useParams } from 'next/navigation';
import { PATH_NAME } from '@/constants/pathname';

export default function useHeader() {
  const { activeTab } = useParams();
  const pathname = usePathname();

  const [title, setTitle] = useState('');
  const [isNotification, setIsNotification] = React.useState(true);

  useEffect(() => {
    const titleMap = {
      [PATH_NAME.ROOT]: 'Dashboard',
      [PATH_NAME.BLOG_ALL_POSTS]: 'All Post',
      [`${PATH_NAME.BLOG_ALL_POSTS}/${activeTab}`]: 'All Post',
      [PATH_NAME.BLOG_NEW_POSTS]: 'New Post',
      [PATH_NAME.BLOG_CATEGORY]: 'Category',
      [PATH_NAME.BLOG_TAG]: 'Tag',
      [PATH_NAME.COMMENTS]: 'Comments',
      [PATH_NAME.MAKES]: 'Makes',
      [`${PATH_NAME.COMMENTS}/${activeTab}`]: 'Comments',
      [PATH_NAME.LOCATION]: 'Location',
      [PATH_NAME.USER_MANAGEMENT_USERS_LIST]: 'User List',
      [PATH_NAME.USER_MANANAEMENT_USER_ROLES]: 'User Role',
      [PATH_NAME.PROFILE_SETTINGS]: 'Profile Settings',
      [PATH_NAME.CHAT]: 'Chat',
      [PATH_NAME.EMAIL]: 'Email',
      [PATH_NAME.FILE_MANAGER]: 'File Manager',
    };

    setTitle(titleMap[pathname] || 'Dashboard');
  }, [pathname]);

  return {
    isNotification,
    title,
  }
}
