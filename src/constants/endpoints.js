export const END_POINTS = {
  // ... existing endpoints ...
  
  // User Profile Management
  GET_PROFILE: '/user/profile',
  UPDATE_PROFILE: '/user/profile-update',
  CHANGE_PASSWORD: '/user/change-password-by-userId',
  UPDATE_PROFILE_IMAGES: '/user/update-profile-images',
  GET_USERS: '/user/get-users',
  CREATE_USER: '/user/create',
  UPDATE_PROFIL_BY_EMAIL:"/user/profile-update-by-email",
  
  // Chat endpoints
  CONVERSATION: '/chat',
  CONVERSATION_LIST: '/chat/list/67302cefa1251b0135c86ea7',
  
  // Location endpoints
  LOCATION: '/location',
  LOCATION_DELETE: '/location/bulk-delete',
  
  // Blog endpoints
  BLOG_LISTING: '/blog/blog-listing/page/1',
  BLOG_TAGS: '/tag',
  BLOG_SEARCH: '/blog/search',
  BLOG_DELETE: '/blog/bulk-delete',
  BLOG_DELETE_SINGLE: '/blog',
  DUPLICATE_POST: '/blog/duplicate',
  STATUS_COUNTS: '/blog/status-counts',
  BLOG_CREATE: '/blog',
  
  // Category endpoints
  TAGS: '/tag',
  CATEGORIES: '/category',
  ADD_CATEGORY: '/category',
  UPDATE_CATEGORY: '/category',
  DELETE_CATEGORY: '/category',
  DELETE_MULTIPLE_CATEGORIES: '/category/bulk-delete',
  
  // Comment endpoints
  COMMENTS: '/comment/filtered',
  COMMENTS_DELETE: '/comment/bulk-delete',
  // Make endpoints
  MAKE: '/browes-by-make',
  MAKE_DELETE: '/make/bulk-delete',
}