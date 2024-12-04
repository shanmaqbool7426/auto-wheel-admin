import { BASE_API } from '@/services/base-api';
import { END_POINTS } from '@/constants/endpoints';

export const usersAPIs = BASE_API.injectEndpoints({
  endpoints: (builder) => ({

    getUsers: builder.query({
      query: (params) => ({
        url: `${END_POINTS?.GET_USERS}`,
        method: 'GET',
        params,
      }),
      providesTags: ['USERS'],
    }),

    createUser: builder.mutation({
      query: (body) => ({
        url: `${END_POINTS?.CREATE_USER}`,
        method: 'POST',
        body,
      }),
      invalidatesTags: ['USERS'],
    }),

    deleteBulkLocation: builder.mutation({
      query(ids) {
        return {
          url: `${END_POINTS?.LOCATION_DELETE}`,
          method: 'POST',
          body: { ids: ids },
        };
      },
      invalidatesTags: ['USERS'],
    }),
    updateUserProfile: builder.mutation({
      query: ({ userId, ...body }) => ({
        url: `${END_POINTS.UPDATE_PROFILE}/${userId}`,
        method: 'PUT',
        body,
      }),
      invalidatesTags: ['USER_PROFILE'],
    }),

    updatePassword: builder.mutation({
      query: (body) => ({
        url: `${END_POINTS?.CHANGE_PASSWORD}`,
        method: 'PUT',
        body,
      }),
    }),

    getUserProfile: builder.query({
      query: (userId) => ({
        url: `${END_POINTS?.GET_PROFILE}/674b65b49ac1204f8df67d99`,
        method: 'GET',
      }),
      providesTags: ['USER_PROFILE'],
    }),

    updateProfileImages: builder.mutation({
      query: (body) => ({
        url: `${END_POINTS?.UPDATE_PROFILE_IMAGES}`,
        method: 'PUT',
        body,
      }),
      invalidatesTags: ['USER_PROFILE'],
    }),
  }),
});


export const {
  useGetUsersQuery,
  useCreateUserMutation,
  useDeleteBulkLocationMutation,
  useUpdatePersonalInfoMutation,
  useUpdatePasswordMutation,
  useGetUserProfileQuery,
  useUpdateProfileImagesMutation,
} = usersAPIs;
