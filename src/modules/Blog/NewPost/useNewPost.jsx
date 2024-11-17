import { useForm } from '@mantine/form';
import { useAddPostMutation, useGetCategoriesQuery, useGetTagsQuery } from '@/services/blog/posts';
import { showNotification } from '@mantine/notifications';
// import { useNavigate } from 'react-router-dom';

export default function useNewPost() {
  // const navigate = useNavigate();
  const [addPost, { isLoading }] = useAddPostMutation();
  const {data:categoriesData} = useGetCategoriesQuery()
  const {data:tagsData} = useGetTagsQuery()
  const form = useForm({
    initialValues: {
      title: '',
      content: '',
      author: '', // You might want to get this from auth context
      categories: [],
      tags: [],
      isSticky: false,
      visibility: 'Draft',
      publishDate: null,
      scheduledAt: null,
      imageUrl: null,
    },
    validate: {
      title: (value) => (!value ? 'Title is required' : null),
      content: (value) => (!value ? 'Content is required' : null),
      categories: (value) => (!value.length ? 'At least one category is required' : null),
      imageUrl: (value) => (!value ? 'Featured image is required' : null),
    },
  });

  const handleSubmit = async (values) => {
    try {
      const formData = new FormData();
      
      // Append basic fields
      Object.keys(values).forEach(key => {
        if (key === 'categories' || key === 'tags') {
          formData.append(key, JSON.stringify(values[key]));
        } else if (key === 'imageUrl' && values[key]) {
          formData.append('imageUrl', values[key]);
        } else if (values[key] !== null) {
          formData.append(key, values[key]);
        }
      });

      const response = await addPost(formData).unwrap();
      
      showNotification({
        title: 'Success',
        message: 'Blog post created successfully',
        color: 'green',
      });

      // navigate('/blogs'); // Adjust the route as needed
    } catch (error) {
      showNotification({
        title: 'Error',
        message: error.data?.message || 'Failed to create blog post',
        color: 'red',
      });
    }
  };

  return {
    form,
    categoriesData,
    tagsData,
    handleSubmit,
    isLoading
  };
}