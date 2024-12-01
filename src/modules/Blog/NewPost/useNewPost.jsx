import { useForm } from '@mantine/form';
import { useAddPostMutation, useGetCategoriesQuery, useGetTagsQuery } from '@/services/blog/posts';
import { showNotification } from '@mantine/notifications';
// import { useNavigate } from 'react-router-dom';
export default function useNewPost(initialPost = null) {
  const [addPost, { isLoading }] = useAddPostMutation();
  const [updatePost, { isLoading: isUpdating }] = useUpdatePostMutation();
  const { data: categoriesData } = useGetCategoriesQuery();
  const { data: tagsData } = useGetTagsQuery();

  // Transform initial post data for form
  const getInitialValues = (post) => {
    if (!post) return {
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

    return {
      title: post.title || '',
      content: post.content || '',
      author: post.author || '',
      categories: post.categories?.map(cat => cat.id) || [],
      tags: post.tags?.map(tag => tag.id) || [],
      isSticky: post.isSticky || false,
      visibility: post.visibility || 'Draft',
      publishDate: post.publishDate ? new Date(post.publishDate) : null,
      scheduledAt: post.scheduledAt ? new Date(post.scheduledAt) : null,
      imageUrl: post.imageUrl || null, // This will be the URL for existing image
      existingImageUrl: post.imageUrl || null, // Keep track of existing image URL
    };
  };

  const form = useForm({
    initialValues: getInitialValues(initialPost),
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
  });

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
    categoriesData,
    tagsData,
    handleSubmit,
    isLoading: isLoading || isUpdating,
    isEdit: !!initialPost,
  };
}