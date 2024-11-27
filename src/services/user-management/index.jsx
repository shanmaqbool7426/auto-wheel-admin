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

  }),
});


export const {
  useGetUsersQuery,
  useCreateUserMutation,
  useDeleteBulkLocationMutation,
} = usersAPIs;
