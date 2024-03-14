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
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
    {/* <Avatar text="МК" size="xl" />
    <Avatar text="МК" size="l" />
    <Avatar text="МК" size="m" />
    <Avatar text="МК" size="s" />
    <Avatar src="/avatar.jpg" />
    <Avatar src="/avatar.jpg" size="xl" />
    <Avatar src="/avatar.jpg" size="l" />
    <Avatar src="/avatar.jpg" size="m" />
    <Avatar src="/avatar.jpg" size="s" /> */}
  </div>
);

export default AvatarPage;
