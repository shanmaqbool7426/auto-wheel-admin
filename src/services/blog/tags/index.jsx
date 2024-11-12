import { BASE_API } from '@/services/base-api';
import { END_POINTS } from '@/constants/endpoints';

export const tagsAPIs = BASE_API.injectEndpoints({
  endpoints: (builder) => ({

    getTags: builder.query({
      query: (params) => ({
        url: `${END_POINTS.BLOG_TAGS}`,
        method: 'GET',
        params,
      }),
      providesTags: ['TAGS'],
    }),

    addPost: builder.mutation({
      query: (body) => ({
        url: END_POINTS.BLOG_TAGS,
        method: 'POST',
        body,
      }),
      invalidatesTags: ['TAGS'],
    }),

    getPost: builder.query({
      query: (id) => `${END_POINTS.BLOG_TAGS}/${id}`,
      providesTags: ['TAGS'],
    }),

    updatePost: builder.mutation({
      query(data) {
        const { id, ...body } = data;
        return {
          url: `${END_POINTS.BLOG_TAGS}/${id}`,
          method: 'PUT',
          body,
        };
      },
      invalidatesTags: ['TAGS'],
    }),

    deletePost: builder.mutation({
      query(id) {
        return {
          url: `${END_POINTS.BLOG_TAGS}/${id}`,
          method: 'DELETE',
        };
      },
      invalidatesTags: ['TAGS'],
    }),

  }),
});

export const {
  useGetTagsQuery,
  useAddPostMutation,
  useGetPostQuery,
  useUpdatePostMutation,
  useDeletePostMutation,
} = tagsAPIs;
