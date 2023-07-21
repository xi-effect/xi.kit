type BreadcrumbLink = {
  name: string;
  link: string;
};

export type BreadcrumbsProps = {
  breadcrumbs: BreadcrumbLink[];
};

export const Breadcrumbs = ({ breadcrumbs }: BreadcrumbsProps) => {
  return (
    <div>
      {breadcrumbs.map((item, index, breadcrumbsArray) => {
        const isLastItem = index === breadcrumbsArray.length - 1;

        return (
          <a href={item.link} tabIndex={isLastItem ? -1 : 0}>
            {item.name}
          </a>
        );
      })}
    </div>
  );
};
