import { Stack } from '@mui/material';
import { ChecboxTest, ChecboxTestData } from 'components/Checkbox';

const TestComponents = () => (
  <>
    {ChecboxTestData.map((group, index) => (
      <Stack direction="row" spacing={2} key={`group_${index}`}>
        {group.map((data, index) => (
          <ChecboxTest {...data} key={`checkbox_${index}`} />
        ))}
      </Stack>
    ))}
  </>
);

export default TestComponents;
