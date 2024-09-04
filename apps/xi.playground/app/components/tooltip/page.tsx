'use client';

import { Button } from '@xipkg/button';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@xipkg/tooltip';

const TooltipDemo = () => (
  <TooltipProvider>
    <div className="flex flex-col gap-6">
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="secondary">Hover | Bottom</Button>
        </TooltipTrigger>
        <TooltipContent side="bottom">
          <p>Your text goes here</p>
        </TooltipContent>
      </Tooltip>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="secondary">Hover | Top</Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Your text goes here</p>
        </TooltipContent>
      </Tooltip>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="secondary">Hover | Left</Button>
        </TooltipTrigger>
        <TooltipContent side="left">
          <p>Your text goes here</p>
        </TooltipContent>
      </Tooltip>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="secondary">Hover | Right</Button>
        </TooltipTrigger>
        <TooltipContent side="right">
          <p>Your text goes here</p>
        </TooltipContent>
      </Tooltip>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="secondary">Hover | With a lot text</Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco.
          </p>
        </TooltipContent>
      </Tooltip>
    </div>
  </TooltipProvider>
);

export default TooltipDemo;
