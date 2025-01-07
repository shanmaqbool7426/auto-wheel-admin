import { Grid, NumberInput, MultiSelect, TextInput, Textarea, FileInput, Box, Image } from '@mantine/core';
import { useUploadImageMutation } from '@/services/vehicle-manage';
import { useState, useEffect } from 'react';
import { IconX } from '@tabler/icons-react';

export const GeneralInformation = ({ form }) => {
  const [uploadImage] = useUploadImageMutation();
  const [files, setFiles] = useState([]);
  const [previews, setPreviews] = useState([]);
  const [defaultImageFile, setDefaultImageFile] = useState(null);
  const [defaultImagePreview, setDefaultImagePreview] = useState(form.values.defaultImage || null);

  const handleDefaultImageUpload = (file) => {
    if (file) {
      // Create preview URL
      const previewUrl = URL.createObjectURL(file);
      setDefaultImagePreview(previewUrl);
      setDefaultImageFile(file);
      
      // Update form
      form.setFieldValue('defaultImage', file);
    }
  };

  const handleAdditionalImagesUpload = async (files) => {
    if (files?.length) {
      // Create preview URLs
      const newPreviews = files.map(file => URL.createObjectURL(file));
      setPreviews(prev => [...prev, ...newPreviews]);
      setFiles(prev => [...prev, ...files]);

      const uploadPromises = files.map(file => {
        const formData = new FormData();
        formData.append('images', file);
        return uploadImage(formData).unwrap();
      });

      try {
        const responses = await Promise.all(uploadPromises);
        const imageUrls = responses.map(response => response?.data[0]);
        form.setFieldValue('images', [...(form.values.images || []), ...imageUrls]);
      } catch (error) {
        console.error('Failed to upload images:', error);
      }
    }
  };

  const removeAdditionalImage = (index) => {
    const newFiles = [...files];
    newFiles.splice(index, 1);
    setFiles(newFiles);

    const newPreviews = [...previews];
    URL.revokeObjectURL(newPreviews[index]);
    newPreviews.splice(index, 1);
    setPreviews(newPreviews);

    const currentImages = form.values.images || [];
    const newImages = [...currentImages];
    newImages.splice(index, 1);
    form.setFieldValue('images', newImages);
  };

  // Cleanup preview URLs when component unmounts
  useEffect(() => {
    return () => {
      if (defaultImagePreview) {
        URL.revokeObjectURL(defaultImagePreview);
      }
      previews.forEach(preview => URL.revokeObjectURL(preview));
    };
  }, []);

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
        <Box mb="md">
          <FileInput
            label="Default Image"
            accept="image/*"
            onChange={handleDefaultImageUpload}
            required
            placeholder="Upload main vehicle image"
            name="defaultImage"
          />
          {defaultImagePreview && (
            <Box mt="xs">
              <Image
                src={defaultImagePreview}
                alt="Default preview"
                width={200}
                height={150}
                fit="contain"
                radius="md"
              />
            </Box>
          )}
        </Box>
      </Grid.Col>

      <Grid.Col span={12}>
        <Box>
          <FileInput
            label="Additional Images"
            multiple
            maxFiles={5}
            value={files}
            accept="image/*"
            placeholder="Upload additional vehicle images"
            onChange={handleAdditionalImagesUpload}
            name="additionalImages"
          />
          {previews.length > 0 && (
            <Box 
              mt="xs" 
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '10px'
              }}
            >
              {previews.map((preview, index) => (
                <Box 
                  key={index} 
                  style={{ 
                    position: 'relative',
                    width: '150px'
                  }}
                >
                  <Image
                    src={preview}
                    alt={`Preview ${index + 1}`}
                    width={150}
                    height={100}
                    fit="contain"
                    radius="md"
                  />
                  <Box
                    onClick={() => removeAdditionalImage(index)}
                    style={{
                      position: 'absolute',
                      top: 5,
                      right: 5,
                      background: 'white',
                      borderRadius: '50%',
                      cursor: 'pointer',
                      padding: '2px'
                    }}
                  >
                    <IconX size={16} />
                  </Box>
                </Box>
              ))}
            </Box>
          )}
        </Box>
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