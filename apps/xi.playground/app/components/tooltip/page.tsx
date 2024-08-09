'use client';

import { Button } from '@xipkg/button';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger, TooltipArrow } from '@xipkg/tooltip';

const TestComponent = () => (
  <>
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="secondary">Hover</Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Your text goes here</p>
          <TooltipArrow />
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  </>
);

export default TestComponent;
