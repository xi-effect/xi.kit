'use client';

import * as React from 'react';

import { Slider } from '@xipkg/slider';

export default function SliderDemo() {
  return (
    <>
      <div className="flex flex-col w-[320px] gap-8 bg-white p-8 rounded-md">
        <Slider defaultValue={[0]} max={100} step={1} />
        <Slider defaultValue={[50]} max={100} step={1} />
        <Slider defaultValue={[100]} max={100} step={1} />
      </div>
    </>
  );
}
