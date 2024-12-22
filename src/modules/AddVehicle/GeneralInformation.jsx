import { Grid, NumberInput, MultiSelect, TextInput, Textarea, FileInput } from '@mantine/core';
import { useUploadImageMutation } from '@/services/vehicle-manage';

export const GeneralInformation = ({ form }) => {
  const [uploadImage] = useUploadImageMutation();

  const handleDefaultImageUpload = async (file) => {
    if (file) {
      const formData = new FormData();
      formData.append('images', file);
      
      try {
        const response = await uploadImage(formData).unwrap();
        const imageUrl = response?.data[0];
        form.setFieldValue('defaultImage', imageUrl);
      } catch (error) {
        console.error('Failed to upload image:', error);
      }
    }
  };

  const handleAdditionalImagesUpload = async (files) => {
    if (files?.length) {
      const uploadPromises = files.map(file => {
        const formData = new FormData();
        formData.append('images', file);
        return uploadImage(formData).unwrap();
      });

      try {
        const responses = await Promise.all(uploadPromises);
        const imageUrls = responses.map(response => response?.data[0]);
        form.setFieldValue('images', imageUrls);
      } catch (error) {
        console.error('Failed to upload images:', error);
      }
    }
  };

  return (
    <Grid>
      {/* Price Information */}
      <Grid.Col span={6}>
        <NumberInput
          label="Minimum Price"
          required
          min={0}
          placeholder="Enter minimum price"
          {...form.getInputProps('minPrice')}
          name="minPrice"
        />
      </Grid.Col>
      <Grid.Col span={6}>
        <NumberInput
          label="Maximum Price"
          required
          min={0}
          placeholder="Enter maximum price"
          {...form.getInputProps('maxPrice')}
          name="maxPrice"
        />
      </Grid.Col>

      {/* Colors and Release Date */}
      <Grid.Col span={6}>
        <MultiSelect
          label="Available Colors"
          placeholder="Select available colors"
          data={[
            'White', 'Black', 'Silver', 'Red', 'Blue',
            'Grey', 'Brown', 'Green', 'Gold', 'Bronze'
          ]}
          {...form.getInputProps('colors')}
          name="colors"
        />
      </Grid.Col>
      <Grid.Col span={6}>
        <TextInput
          label="Release Date"
          type="date"
          {...form.getInputProps('releaseDate')}
          name="releaseDate"
        />
      </Grid.Col>

      {/* Description */}
      <Grid.Col span={12}>
        <Textarea
          label="Description"
          required
          minRows={4}
          placeholder="Detailed description of the vehicle..."
          {...form.getInputProps('description')}
          name="description"
        />
      </Grid.Col>

      {/* Images */}
      <Grid.Col span={12}>
        <FileInput
          label="Default Image"
          accept="image/*"
          onChange={handleDefaultImageUpload}
          required
          placeholder="Upload main vehicle image"
          name="defaultImage"
        />
      </Grid.Col>
      <Grid.Col span={12}>
        <FileInput
          label="Additional Images"
          multiple
          accept="image/*"
          placeholder="Upload additional vehicle images"
          onChange={handleAdditionalImagesUpload}
          name="additionalImages"
        />
      </Grid.Col>

      {/* Pros and Cons */}
      <Grid.Col span={6}>
        <Textarea
          label="Pros"
          placeholder="Enter pros (one per line)"
          minRows={3}
          {...form.getInputProps('pros')}
          name="pros"
          description="Enter each advantage in a new line"
        />
      </Grid.Col>
      <Grid.Col span={6}>
        <Textarea
          label="Cons"
          placeholder="Enter cons (one per line)"
          minRows={3}
          {...form.getInputProps('cons')}
          name="cons"
          description="Enter each disadvantage in a new line"
        />
      </Grid.Col>

      {/* FAQs */}
      <Grid.Col span={12}>
        <Textarea
          label="FAQs"
          placeholder="Q: Question?\nA: Answer"
          minRows={4}
          {...form.getInputProps('faqs')}
          name="faqs"
          description="Format: Q: Question?\nA: Answer"
        />
      </Grid.Col>

      {/* Brochure Link */}
      <Grid.Col span={12}>
        <TextInput
          label="Brochure Link"
          placeholder="URL to vehicle brochure"
          {...form.getInputProps('brochureLink')}
          name="brochureLink"
        />
      </Grid.Col>
    </Grid>
  );
};

// Helper component for image preview
const ImagePreview = ({ url }) => {
  if (!url) return null;
  
  return (
    <img 
      src={url} 
      alt="Preview" 
      style={{ 
        maxWidth: '100px', 
        maxHeight: '100px', 
        objectFit: 'cover', 
        marginTop: '8px' 
      }} 
    />
  );
};

export default GeneralInformation;