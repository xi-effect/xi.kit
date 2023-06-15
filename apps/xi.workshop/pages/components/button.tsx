import { Button } from '@mui/material';
import { LayoutPages } from 'kit/LayoutPages';

const TestComponents = () => {
  console.log('test');

  return (
    <LayoutPages>
      <div style={{ display: 'flex', gap: '16px' }}>
        <Button size="large">Click me</Button>
        <Button size="medium">Click me</Button>
        <Button size="small">Click me</Button>
      </div>
      <div style={{ display: 'flex', gap: '16px' }}>
        <Button variant="primary" size="large">
          Click me
        </Button>
        <Button size="medium">Click me</Button>
        <Button size="small">Click me</Button>
      </div>
    </LayoutPages>
  );
};

export default TestComponents;
