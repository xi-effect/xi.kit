'use client';

import React from 'react';
import { Link, Stack } from '@mui/material';
import { TestSelect, selectTestData } from 'components/Select';

const TestComponents = () => (
  <>
    <Stack spacing={2}>
      {selectTestData.map((select) => (
        <TestSelect {...select} key={select.id} />
      ))}
    </Stack>
    <Link href="https://github.com/">https://github.com/</Link>
  </>
);

export default TestComponents;
