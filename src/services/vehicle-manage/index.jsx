import { BASE_API } from '@/services/base-api';
import { END_POINTS } from '@/constants/endpoints';


// export const imageUploadApi = createApi({
//     reducerPath: 'imageUploadApi',
//     baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
//     endpoints: (builder) => ({
//       uploadImage: builder.mutation({
//         query: (formData) => ({
//           url: '/upload-image',
//           method: 'POST',
//           body: formData,
//         }),
//       }),
//     }),
//   });

export const usersAPIs = BASE_API.injectEndpoints({
  endpoints: (builder) => ({

    getVehicles: builder.query({
      query: (params) => ({
        url: `${END_POINTS?.VEHICLES}`,
        method: 'GET',
        params,
      }),
      providesTags: ['VEHICLES'],
    }),
    // get vehicle by id
    getVehicleById: builder.query({
      query: (id) => ({
        url: `${END_POINTS?.GET_VEHICLE_BY_ID}?id=${id}`,
        method: 'GET',
      }),
    }),

    createVehicle: builder.mutation({
      query: (body) => ({
        url: `${END_POINTS?.VEHICLES}`,
        method: 'POST',
        body,
      }),
      invalidatesTags: ['VEHICLES'],
    }),

    deleteBulkVehicle: builder.mutation({
      query(ids) {
        return {
          url: `${END_POINTS?.VEHICLES}`,
          method: 'POST',
          body: { ids: ids },
        };
      },
        invalidatesTags: ['VEHICLES'],
    }),
    updateVehicle: builder.mutation({
      query: ({ userId, ...body }) => ({
        url: `${END_POINTS?.VEHICLES}`,
        method: 'PUT',
        body,
      }),
      invalidatesTags: ['VEHICLES'],
    }),

    updateVehicle: builder.mutation({
      query: ({userId, ...body}) => ({
        url: `${END_POINTS?.VEHICLES}/${userId}`,
        method: 'PUT',
        body,
      }),
    }),

// image upload

uploadImage: builder.mutation({
    query: (body) => ({
        url: '/upload-image',
      method: 'POST',
      body,
    }),
  }),
    
  }),
});


export const {
  useGetVehiclesQuery,
  useGetVehicleByIdQuery,
  useCreateVehicleMutation,
  useDeleteBulkVehicleMutation,
  useUpdateVehicleMutation,
  useGetVehicleQuery,
  useUploadImageMutation
} = usersAPIs;