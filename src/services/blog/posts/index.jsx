import { BASE_API } from '@/services/base-api';
import { END_POINTS } from '@/constants/endpoints';

export const postAPIs = BASE_API.injectEndpoints({
  endpoints: (builder) => ({

    getPosts: builder.query({
      query: (params) => ({
        url: END_POINTS.POST,
        method: 'GET',
        params,
      }),
      providesTags: (result = []) => [
        ...result.map(({ id }) => ({ type: 'Posts', id })),
        { type: 'Posts', id: 'LIST' },
      ],
    }),

    addPost: builder.mutation({
      query: (body) => ({
        url: END_POINTS.POST,
        method: 'POST',
        body,
      }),
      invalidatesTags: [{ type: 'Posts', id: 'LIST' }],
    }),

    getPost: builder.query({
      query: (id) => `posts/${id}`,
      providesTags: (_post, _err, id) => [{ type: 'Posts', id }],
    }),

    updatePost: builder.mutation({
      query(data) {
        const { id, ...body } = data;
        return {
          url: `${END_POINTS.POST}/${id}`,
          method: 'PUT',
          body,
        };
      },
      invalidatesTags: (post) => [{ type: 'Posts', id: post?.id }],
    }),

    deletePost: builder.mutation({
      query(id) {
        return {
          url: `${END_POINTS.POST}/${id}`,
          method: 'DELETE',
        };
      },
      invalidatesTags: (post) => [{ type: 'Posts', id: post?.id }],
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
