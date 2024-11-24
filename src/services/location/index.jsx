import { BASE_API } from '@/services/base-api';
import { END_POINTS } from '@/constants/endpoints';

export const locationAPIs = BASE_API.injectEndpoints({
  endpoints: (builder) => ({

    getLocations: builder.query({
      query: (params) => ({
        url: `${END_POINTS.LOCATION}`,
        method: 'GET',
        params,
      }),
      providesTags: ['LOCATIONS'],
    }),

    addLocation: builder.mutation({
      query: (body) => ({
        url: `${END_POINTS.LOCATION}`,
        method: 'POST',
        body,
      }),
      invalidatesTags: ['LOCATIONS'],
    }),

    deleteBulkLocation: builder.mutation({
      query(ids) {
        return {
          url: `${END_POINTS.LOCATION_DELETE}`,
          method: 'POST',
          body: { ids: ids },
        };
      },
      invalidatesTags: ['COMMENTS'],
    }),

  }),
});


export const {
  useGetLocationsQuery,
  useAddLocationMutation,
  useDeleteBulkLocationMutation,
} = locationAPIs;
