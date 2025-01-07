"use client";
import React, { useState } from 'react';
import {
    Flex,
    Text,
    Title,
    Rating,
    Button,
    Group,
    Box,
    Grid,
    Card,
    LoadingOverlay
} from '@mantine/core';
import Image from 'next/image';
import styles from './CompareList.module.css';
import useCompareVehicle from './useCompareVehicles';
import CustomButton from '@/components/CustomButton';
import { IconPlus } from '@tabler/icons-react';
import { MdEdit, MdDelete } from "react-icons/md";
import AddComparison from './AddComparison';
import { useDeleteComparisonSetMutation } from '@/services/comparison';
export default function CompareList() {
    const [isComparisonModalOpen, setIsComparisonModalOpen] = useState(false);
    const { comparisons, isLoading } = useCompareVehicle();
    const [deleteComparisonSetMutation] = useDeleteComparisonSetMutation();
    const [comparison, setComparison] = useState(null);


    const handleDelete = async (id) => {
        const response = await deleteComparisonSetMutation(id);
        console.log('Delete:', response);
    };

    const handleEdit = (comparison) => {
        console.log('Edit:', comparison);
        setIsComparisonModalOpen(true);
        setComparison(comparison);
    };

    if (isLoading) return <LoadingOverlay visible />;
    if (!comparisons || comparisons.length === 0) {
        return (
            <Box className={styles.container}>
                <Text>No comparisons found</Text>
            </Box>
        );
    }
    let DEFAULT_IMAGE = "/images/default-image.png";

    return (
        <Box className={styles.container}>
            <Flex justify="flex-end" mb="md">
                <CustomButton
                    leftSection={<IconPlus />}
                    onClick={() => setIsComparisonModalOpen(true)}
                >
                    Add Comparison
                </CustomButton>
            </Flex>

            <Grid>
                {comparisons?.map((comparison) => (
                    <Grid.Col key={comparison.compareSetId} span={4}>
                        <Card className={styles.comparisonCard}>
                            <div className={styles.actionButtons}>
                                <MdEdit 
                                    size={25} 
                                    className={styles.editIcon}
                                    onClick={() => handleEdit(comparison)}
                                />
                                <MdDelete 
                                    size={25}
                                    className={styles.deleteIcon}
                                    onClick={() => handleDelete(comparison._id)}
                                />
                            </div>

                            <div className={styles.compareProducts}>
                                <div className={styles.productImages}>
                                    {comparison.vehicles?.map((vehicle, index) => (
                                        <React.Fragment key={vehicle?._id || index}>
                                            <div className={styles.productCompare}>
                                                <Image
                                                    src={vehicle?.defaultImage || DEFAULT_IMAGE}
                                                    alt={`${vehicle?.make || 'Vehicle'} ${vehicle?.model || ''}`}
                                                    width={120}
                                                    height={80}
                                                    className={styles.productImage}
                                                />
                                            </div>
                                            {index < (comparison.vehicles?.length - 1) && (
                                                <span className={styles.vsText}>VS</span>
                                            )}
                                        </React.Fragment>
                                    ))}
                                </div>

                                <div className={styles.cardBody}>
                                    <Flex direction="column" justify="space-between">
                                        <Group wrap="nowrap" className={styles.compareInfo} mb="lg">
                                            {comparison.vehicles?.map((vehicle, index) => (
                                                <Flex
                                                    key={vehicle?._id || index}
                                                    direction="column"
                                                    gap="xs"
                                                    align="center"
                                                >
                                                    <Title className={styles.vehicleTitle}>
                                                        {vehicle?.make} {vehicle?.model} {vehicle?.variant}
                                                    </Title>
                                                    <Flex align="center" gap={5}>
                                                        <Rating
                                                            value={vehicle?.averageRating || 0}
                                                            readOnly
                                                            size="sm"
                                                        />
                                                        <Text size="sm">
                                                            ({vehicle?.reviewCount || 0})
                                                        </Text>
                                                    </Flex>
                                                </Flex>
                                            ))}
                                        </Group>

                                        <Button
                                            variant="outline"
                                            color="red"
                                            fullWidth
                                            component="a"
                                            href={`/compare-vehicle/${comparison?.compareSetId}`}
                                        >
                                            Compare
                                        </Button>
                                    </Flex>
                                </div>
                            </div>
                        </Card>
                    </Grid.Col>
                ))}
            </Grid>

            <AddComparison
                open={isComparisonModalOpen}
                setOnClose={() => setIsComparisonModalOpen(false)}
                comparison={comparison}
            />
        </Box>
    );
} 