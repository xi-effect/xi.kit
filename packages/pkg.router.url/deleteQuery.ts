'use client';

import { ReadonlyURLSearchParams } from 'next/navigation';

type DeleteQueryT = {
  [key: string]: string;
};

export const deleteQuery = (
  searchParams: ReadonlyURLSearchParams | DeleteQueryT | string,
  name: string,
) => {
  const params = new URLSearchParams(searchParams.toString());
  params.delete(name);
  return params.toString();
};
