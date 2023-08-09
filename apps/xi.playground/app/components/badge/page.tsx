import { Badge } from '@xipkg/badge';
import { Camera } from '@xipkg/icons';

const BadgePage = () => (
  <>
    <Badge icon={Camera} bgColor="brand.80" iconColor="gray.0" fontColor="gray.0">
      Title
    </Badge>

    <Badge icon={Camera} bgColor="brand.80" iconColor="gray.0">
      Title
    </Badge>

    <Badge size="small" icon={Camera} bgColor="gray.10" iconColor="red.80">
      Title
    </Badge>

    <Badge
      size="small"
      icon={Camera}
      bgColor="gray.10"
      iconColor="red.80"
      fontColor="red.80"
    >
      Title
    </Badge>
  </>
);

export default BadgePage;
