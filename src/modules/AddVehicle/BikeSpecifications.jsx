import { Box, Grid, Title, NumberInput, TextInput, Select, MultiSelect } from '@mantine/core';
import { memo } from 'react';

export const BikeSpecifications = memo(({ form }) => {
  return (
    <Box>
      {/* Engine Specifications */}
      <EngineSpecs form={form} />

      {/* Performance & Transmission */}
      <PerformanceSpecs form={form} />

      {/* Dimensions */}
      <DimensionsSpecs form={form} />

      {/* Chassis & Suspension */}
      <ChassisSpecs form={form} />

      {/* Wheels & Tyres */}
      <WheelsAndTyresSpecs form={form} />
    </Box>
  );
});

const EngineSpecs = ({ form }) => (
  <Box mb="xl">
    <Title order={3} mb="md">Engine Specifications</Title>
    <Grid>
      <Grid.Col span={4}>
        <TextInput
          label="Engine Type"
          required
          placeholder="e.g., 4 Stroke OHC Air Cooled"
          {...form.getInputProps('bikeSpecs.engine.type')}
          name="engineType"
        />
      </Grid.Col>
      <Grid.Col span={4}>
        <NumberInput
          label="Displacement (cc)"
          required
          placeholder="e.g., 124"
          min={50}
          max={2000}
          {...form.getInputProps('bikeSpecs.engine.displacement')}
          name="engineDisplacement"
        />
      </Grid.Col>
      <Grid.Col span={4}>
        <TextInput
          label="Horsepower"
          required
          placeholder="e.g., 10.7 HP @ 7500 RPM"
          {...form.getInputProps('bikeSpecs.engine.horsepower')}
          name="engineHorsepower"
        />
      </Grid.Col>
      <Grid.Col span={4}>
        <TextInput
          label="Torque"
          required
          placeholder="e.g., 10.4 Nm @ 6500 RPM"
          {...form.getInputProps('bikeSpecs.engine.torque')}
          name="engineTorque"
        />
      </Grid.Col>
      <Grid.Col span={4}>
        <TextInput
          label="Bore & Stroke"
          required
          placeholder="e.g., 54.0 x 54.0 mm"
          {...form.getInputProps('bikeSpecs.engine.boreStroke')}
          name="engineBoreStroke"
        />
      </Grid.Col>
      <Grid.Col span={4}>
        <TextInput
          label="Compression Ratio"
          required
          placeholder="e.g., 10.0:1"
          {...form.getInputProps('bikeSpecs.engine.compressionRatio')}
          name="engineCompressionRatio"
        />
      </Grid.Col>
      <Grid.Col span={4}>
        <TextInput
          label="Clutch"
          required
          placeholder="e.g., Wet Type Multi-Plate"
          {...form.getInputProps('bikeSpecs.engine.clutch')}
          name="engineClutch"
        />
      </Grid.Col>
    </Grid>
  </Box>
);

const PerformanceSpecs = ({ form }) => (
  <Box mb="xl">
    <Title order={3} mb="md">Performance & Transmission</Title>
    <Grid>
      <Grid.Col span={4}>
        <TextInput
          label="Starting System"
          required
          placeholder="e.g., Kick & Electric Start"
          {...form.getInputProps('bikeSpecs.starting')}
          name="startingSystem"
        />
      </Grid.Col>
      <Grid.Col span={4}>
        <TextInput
          label="Transmission"
          required
          placeholder="e.g., 5-speed"
          {...form.getInputProps('bikeSpecs.transmission')}
          name="transmission"
        />
      </Grid.Col>
      <Grid.Col span={4}>
        <NumberInput
          label="Fuel Capacity (L)"
          required
          placeholder="e.g., 13"
          min={1}
          max={50}
          {...form.getInputProps('bikeSpecs.fuelCapacity')}
          name="fuelCapacity"
        />
      </Grid.Col>
      <Grid.Col span={4}>
        <TextInput
          label="Fuel Average"
          required
          placeholder="e.g., 45.0 KM/L"
          {...form.getInputProps('bikeSpecs.fuelAverage')}
          name="fuelAverage"
        />
      </Grid.Col>
      <Grid.Col span={4}>
        <TextInput
          label="Top Speed"
          required
          placeholder="e.g., 100 KM/H"
          {...form.getInputProps('bikeSpecs.topSpeed')}
          name="topSpeed"
        />
      </Grid.Col>
    </Grid>
  </Box>
);

const DimensionsSpecs = ({ form }) => (
  <Box mb="xl">
    <Title order={3} mb="md">Dimensions</Title>
    <Grid>
      <Grid.Col span={4}>
        <TextInput
          label="Overall Length"
          required
          placeholder="e.g., 1975 mm"
          {...form.getInputProps('bikeSpecs.dimensions.length')}
          name="dimensionsLength"
        />
      </Grid.Col>
      <Grid.Col span={4}>
        <TextInput
          label="Overall Width"
          required
          placeholder="e.g., 745 mm"
          {...form.getInputProps('bikeSpecs.dimensions.width')}
          name="dimensionsWidth"
        />
      </Grid.Col>
      <Grid.Col span={4}>
        <TextInput
          label="Overall Height"
          required
          placeholder="e.g., 1080 mm"
          {...form.getInputProps('bikeSpecs.dimensions.height')}
          name="dimensionsHeight"
        />
      </Grid.Col>
      <Grid.Col span={4}>
        <NumberInput
          label="Dry Weight (KG)"
          required
          placeholder="e.g., 114"
          min={50}
          max={500}
          {...form.getInputProps('bikeSpecs.dryWeight')}
          name="dryWeight"
        />
      </Grid.Col>
      <Grid.Col span={4}>
        <TextInput
          label="Ground Clearance"
          required
          placeholder="e.g., 145 mm"
          {...form.getInputProps('bikeSpecs.groundClearance')}
          name="groundClearance"
        />
      </Grid.Col>
    </Grid>
  </Box>
);

const ChassisSpecs = ({ form }) => (
  <Box mb="xl">
    <Title order={3} mb="md">Chassis & Suspension</Title>
    <Grid>
      <Grid.Col span={6}>
        <TextInput
          label="Frame Type"
          required
          placeholder="e.g., Backbone Type"
          {...form.getInputProps('bikeSpecs.frame')}
          name="frameType"
        />
      </Grid.Col>
      <Grid.Col span={6}>
        <TextInput
          label="Suspension Type"
          placeholder="e.g., Telescopic Fork"
          {...form.getInputProps('bikeSpecs.suspension')}
          name="suspensionType"
        />
      </Grid.Col>
    </Grid>
  </Box>
);

const WheelsAndTyresSpecs = ({ form }) => (
  <Box mb="xl">
    <Title order={3} mb="md">Wheels & Tyres</Title>
    <Grid>
      <Grid.Col span={4}>
        <TextInput
          label="Wheel Size"
          required
          placeholder="e.g., 18 in"
          {...form.getInputProps('bikeSpecs.wheelSize')}
          name="wheelSize"
        />
      </Grid.Col>
      <Grid.Col span={4}>
        <TextInput
          label="Front Tyre"
          required
          placeholder="e.g., 2.75 - 18"
          {...form.getInputProps('bikeSpecs.tyres.front')}
          name="frontTyre"
        />
      </Grid.Col>
      <Grid.Col span={4}>
        <TextInput
          label="Back Tyre"
          required
          placeholder="e.g., 3.50 - 18"
          {...form.getInputProps('bikeSpecs.tyres.back')}
          name="backTyre"
        />
      </Grid.Col>
      <Grid.Col span={12}>
        <MultiSelect
          label="Available Colors"
          placeholder="Select available colors"
          data={[
            'Red',
            'Black',
            'Blue',
            'Silver',
            'White',
            'Green',
            'Yellow',
            'Orange',
            'Brown',
            'Grey'
          ]}
          searchable
          clearable
          {...form.getInputProps('bikeSpecs.colorsAvailable')}
          name="colorsAvailable"
        />
      </Grid.Col>
    </Grid>
  </Box>
);

export default BikeSpecifications;