import { Avatar } from '@xipkg/avatar';

const AvatarPage = () => (
  <div className="flex flex-wrap flex-col gap-5 h-full">
    <Avatar text="МК" />
    <Avatar text="МК" size="xl" />
    <Avatar text="МК" size="l" />
    <Avatar text="МК" size="m" />
    <Avatar text="МК" size="s" />
    <Avatar src="/avatar.jpg" />
    <Avatar src="/avatar.jpg" size="xl" />
    <Avatar src="/avatar.jpg" size="l" />
    <Avatar src="/avatar.jpg" size="m" />
    <Avatar src="/avatar.jpg" size="s" />
  </div>
);

export default AvatarPage;
