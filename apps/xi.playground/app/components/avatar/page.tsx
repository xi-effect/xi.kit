'use client';

import { Avatar, AvatarImage, AvatarFallback } from '@xipkg/avatar';

const AvatarPage = () => (
  <div className="flex flex-wrap flex-col gap-5 h-full">
    <Avatar size="l">
      <AvatarImage
        src={`https://auth.xieffect.ru/api/users/3/avatar.webp`}
        imageProps={{
          src: `https://auth.xieffect.ru/api/users/3/avatar.webp`,
          alt: '@shadcn',
        }}
        alt="@shadcn"
      />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
    <Avatar size="l">
      <AvatarImage
        src={`https://auth.xieffect.ru/api/users/2/avatar.webp`}
        imageProps={{
          src: `https://auth.xieffect.ru/api/users/2/avatar.webp`,
          alt: '@shadcn',
        }}
        alt="@shadcn"
      />
      <AvatarFallback />
    </Avatar>
    <Avatar size="l">
      <AvatarImage
        src={`https://auth.xieffect.ru/api/users/3/avatar.webp`}
        imageProps={{
          src: `https://auth.xieffect.ru/api/users/3/avatar.webp`,
          alt: '@shadcn',
        }}
        alt="@shadcn"
      />
      <AvatarFallback loading />
    </Avatar>
  </div>
);

export default AvatarPage;
