import { useForm } from '@mantine/form';
import { useAddComparisonSetMutation } from '@/services/comparison';
const useAddComparison = (setOnClose) => {
  const form = useForm({
    initialValues: {
      vehicle1: '',
      vehicle2: '',
    },
    validate: {
      vehicle1: (value) => (!value ? 'Vehicle 1 is required' : null),
      vehicle2: (value) => (!value ? 'Vehicle 2 is required' : null),
    },
  });

  const [addComparisonSet] = useAddComparisonSetMutation()
  const handleSubmit = async (values) => {
    try {
      console.log('Form submitted:', form.getValues());
      const {vehicle1,vehicle2} = form.getValues()
      const payload = [vehicle1,vehicle2]
      
      console.log('payload',payload)
      await addComparisonSet({vehicles:payload,type:"car"}).unwrap()
      setOnClose(false);
    //   form.reset();
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return {
    form,
    handleSubmit,
    isLoading: false,
  };
};

export default useAddComparison;