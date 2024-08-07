import * as React from 'react';

import { Grid, Input, Text, VStack } from '@paalan/react-ui';

import * as AllIconLists from './index';

export default {
  title: 'Icons/All Icons',
  tags: ['autodocs'],
  parameters: {
    controls: { disable: true }, // Hide the controls from the Canvas
    options: {
      showPanel: false, // Hide the controls panel
    },
  },
};

export function AllIcons() {
  const allIcons = Object.entries(AllIconLists).filter(
    ([name]) => name !== 'Icon' && name !== 'convertSvgIconToIcon' && name !== 'createIcon',
  );

  const [filteredIconRecords, setFilteredIconRecords] = React.useState(allIcons);

  const onValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (!value) return setFilteredIconRecords(allIcons);
    const filteredRecords = allIcons.filter(([key]) => {
      return key.toLowerCase().includes(value.toLowerCase());
    });

    setFilteredIconRecords(filteredRecords);
  };
  return (
    <VStack gap="6">
      <Input placeholder="Search icon" onChange={onValueChange} />

      <VStack mb="6">
        <Text fontSize="xl" className="font-bold">
          {filteredIconRecords.length} icons
        </Text>
        <Grid gap="8" className="grid-cols-[repeat(auto-fill,minmax(13rem,1fr))]">
          {filteredIconRecords.map(([key, value]) => {
            const IconComponent = value as React.ElementType;

            return (
              <React.Fragment key={key}>
                <VStack gap="3" alignItems="center" className="break-all text-center shadow" p="4">
                  <IconComponent boxSize="6" />
                  <Text>{key}</Text>
                </VStack>
              </React.Fragment>
            );
          })}
        </Grid>
      </VStack>
    </VStack>
  );
}
