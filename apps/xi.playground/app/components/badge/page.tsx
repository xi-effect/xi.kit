import { Badge } from '@xipkg/badge';

const BadgePage = () => (
  <div className="flex flex-col gap-5 h-full">
    <Badge>Title</Badge>

    <Badge size="s">Title</Badge>

    <Badge size="m">Title</Badge>
  </div>
);

export default BadgePage;
