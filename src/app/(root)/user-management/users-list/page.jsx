import React,{Suspense} from 'react';
import UsersList from  '@/modules/UserManagement/UsersList';

export default function UsersListPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
    <UsersList />
  </Suspense> 
  )
}
