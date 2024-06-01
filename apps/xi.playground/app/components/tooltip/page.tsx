'use client';

import { Button } from '@xipkg/button';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@xipkg/tooltip';

const TestComponent = () => (
  <>
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="secondary">Hover</Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Add to library</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  </>
);

export default TestComponent;
