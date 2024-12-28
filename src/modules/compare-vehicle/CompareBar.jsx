import { Box, Button, Group, Paper, Text, Image, ActionIcon } from '@mantine/core';
import { IconX } from '@tabler/icons-react';
import styles from './CompareBar.module.css';

export default function CompareBar({
  selectedVehicles,
  maxVehicles,
  onRemove,
  onClear,
  onCompare,
  isLoading
}) {
  if (selectedVehicles.length === 0) return null;

  return (
    <Paper 
      className={styles.compareBar}
      pos="fixed"
      bottom={0}
      left={0}
      right={0}
      shadow="md"
      p="md"
      style={{ zIndex: 1000 }}
    >
      <Group position="apart">
        <Group>
          {selectedVehicles.map(vehicle => (
            <Box key={vehicle._id} style={{ position: 'relative' }}>
              <ActionIcon
                size="xs"
                color="red"
                variant="filled"
                style={{ position: 'absolute', top: -8, right: -8 }}
                onClick={() => onRemove(vehicle._id)}
              >
                <IconX size={12} />
              </ActionIcon>
              <Image
                src={vehicle.defaultImage}
                alt={`${vehicle.make} ${vehicle.model}`}
                width={60}
                height={40}
              />
              <Text size="xs" mt={4}>
                {vehicle.make} {vehicle.model}
              </Text>
            </Box>
          ))}
        </Group>
        <Group>
          <Text size="sm" color="dimmed">
            {selectedVehicles.length} of {maxVehicles} selected
          </Text>
          <Button
            variant="subtle"
            color="red"
            onClick={onClear}
          >
            Clear All
          </Button>
          <Button
            onClick={onCompare}
            loading={isLoading}
            disabled={selectedVehicles.length < 2}
          >
            Compare Vehicles
          </Button>
        </Group>
      </Group>
    </Paper>
  );
}