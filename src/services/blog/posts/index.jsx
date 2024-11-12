import { BASE_API } from '@/services/base-api';
import { END_POINTS } from '@/constants/endpoints';

export const postAPIs = BASE_API.injectEndpoints({
  endpoints: (builder) => ({

    getPosts: builder.query({
      query: (params) => ({
        url: `${END_POINTS.BLOG_LISTING}`,
        method: 'GET',
        params,
      }),
      providesTags: ['BLOG_POSTS'],
    }),

    addPost: builder.mutation({
      query: (body) => ({
        url: END_POINTS.BLOG_LISTING,
        method: 'POST',
        body,
      }),
      invalidatesTags: ['BLOG_POSTS'],
    }),

    getPost: builder.query({
      query: (id) => `${END_POINTS.BLOG_LISTING}/${id}`,
      providesTags: ['BLOG_POSTS'],
    }),

    updatePost: builder.mutation({
      query(data) {
        const { id, ...body } = data;
        return {
          url: `${END_POINTS.BLOG_LISTING}/${id}`,
          method: 'PUT',
          body,
        };
      },
      invalidatesTags: ['BLOG_POSTS'],
    }),

    deletePost: builder.mutation({
      query(id) {
        return {
          url: `${END_POINTS.BLOG_LISTING}/${id}`,
          method: 'DELETE',
        };
      },
      invalidatesTags: ['BLOG_POSTS'],
    }),

  }),
});

export const {
  useGetPostsQuery,
  useAddPostMutation,
  useGetPostQuery,
  useUpdatePostMutation,
  useDeletePostMutation,
} = postAPIs;
