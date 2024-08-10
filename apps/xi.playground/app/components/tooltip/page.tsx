'use client';

import { Button } from '@xipkg/button';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger, TooltipArrow } from '@xipkg/tooltip';

const TestComponent = () => (
  <>
    <TooltipProvider>
      <div className='flex flex-col gap-6'>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="secondary">Hover | Bottom</Button>
          </TooltipTrigger>
          <TooltipContent side='bottom'>
            <p>Your text goes here</p>
            <TooltipArrow />
          </TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="secondary">Hover | Top</Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Your text goes here</p>
            <TooltipArrow />
          </TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="secondary">Hover | Left</Button>
          </TooltipTrigger>
          <TooltipContent side='left'>
            <p>Your text goes here</p>
            <TooltipArrow />
          </TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="secondary">Hover | Right</Button>
          </TooltipTrigger>
          <TooltipContent side='right'>
            <p>Your text goes here</p>
            <TooltipArrow />
          </TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="secondary">Hover | With a lot text</Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
            <TooltipArrow />
          </TooltipContent>
        </Tooltip>
      </div>
    </TooltipProvider>
  </>
);

export default TestComponent;
