import { useEffect } from 'react';
import { useForm } from '@mantine/form';
import { showNotification } from '@mantine/notifications';
import { useSearchParams } from 'next/navigation'
import {
  useAddPostMutation,
  useGetCategoriesQuery,
  useGetTagsQuery,
  useUpdatePostMutation,
  useGetPostByIdQuery,
} from '@/services/blog/posts';

export default function useNewPost() {

  const searchParams = useSearchParams();
  const postId = searchParams.get('id');

  const [addPost, { isLoading }] = useAddPostMutation();
  const [updatePost, { isLoading: isUpdating }] = useUpdatePostMutation();
  const { data: getCategoriesData } = useGetCategoriesQuery();
  const catgData = getCategoriesData?.data?.data?.map(catg => ({ value: catg?._id, label: catg?.name })) || [];
  const { data: getTagsData } = useGetTagsQuery();
  const tagsData = getTagsData?.data?.data?.map(tag => ({ value: tag?._id, label: tag?.name })) || [];

  const { data: postDetails, isLoading: loadingPostDetails } = useGetPostByIdQuery(postId, { skip: !postId });

  const initialValues = {
    title: '',
    content: '',
    author: '',
    categories: [],
    tags: [],
    isSticky: false,
    visibility: 'Draft',
    publishDate: null,
    scheduledAt: null,
    imageUrl: null,
  };

  const form = useForm({
    initialValues: initialValues,
    validate: {
      title: (value) => (!value ? 'Title is required' : null),
      content: (value) => (!value ? 'Content is required' : null),
      categories: (value) => (!value.length ? 'At least one category is required' : null),
      imageUrl: (value, values) => {
        // Allow either new image upload or existing image
        if (!value && !values.existingImageUrl) {
          return 'Featured image is required';
        }
        return null;
      },
    },
    onValuesChange: (values) => {
      console.log('values::: ', values);
    }
  });

  useEffect(() => {
    if (postId && postDetails) {
      console.log('postDetails:', postDetails);
      form.setValues({
        title: postDetails?.data?.title || '',
        content: postDetails?.data?.content || '',
        author: postDetails?.data?.author || '',
        categories: postDetails?.data?.categories?.map(cat => cat.name) || [],
        tags: postDetails?.data?.tags?.map(tag => tag?.name) || [],
        isSticky: postDetails?.data?.isSticky || false,
        visibility: postDetails?.data?.visibility || 'Draft',
        publishDate: postDetails?.data?.publishDate ? new Date(postDetails?.data?.publishDate) : null,
        scheduledAt: postDetails?.data?.scheduledAt ? new Date(postDetails?.data?.scheduledAt) : null,
        imageUrl: postDetails?.data?.imageUrl || null,
        existingImageUrl: postDetails?.data?.imageUrl || null,
      });
      console.log('form values after setValues:', form.values);
    }

  }, [postId, postDetails]);



  const handleSubmit = async (values) => {
    try {
      const formData = new FormData();

      Object.keys(values).forEach(key => {
        if (key === 'existingImageUrl') {
          // Skip this field as it's only for internal use
          return;
        }
        if (key === 'categories' || key === 'tags') {
          formData.append(key, JSON.stringify(values[key]));
        } else if (key === 'imageUrl') {
          if (values[key] instanceof File) {
            // New image upload
            formData.append('imageUrl', values[key]);
          } else if (values.existingImageUrl) {
            // Keep existing image
            formData.append('imageUrl', values.existingImageUrl);
          }
        } else if (values[key] !== null) {
          formData.append(key, values[key]);
        }
      });

      if (initialPost) {
        formData.append('id', initialPost.id);
        await updatePost(formData).unwrap();
        showNotification({
          title: 'Success',
          message: 'Blog post updated successfully',
          color: 'green',
        });
      } else {
        await addPost(formData).unwrap();
        showNotification({
          title: 'Success',
          message: 'Blog post created successfully',
          color: 'green',
        });
      }
    } catch (error) {
      showNotification({
        title: 'Error',
        message: error.data?.message || `Failed to ${initialPost ? 'update' : 'create'} blog post`,
        color: 'red',
      });
    }
  };

  return {
    form,
    catgData,
    tagsData,
    handleSubmit,
    isLoading: isLoading || isUpdating,
    isEdit: !!postId,
    loadingPostDetails,
  };
}