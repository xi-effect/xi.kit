import React from "react";
import { cn } from "@xipkg/utils";

export const DrawerFooter = ({
    className,
    ...props
  }: React.HTMLAttributes<HTMLDivElement>) => (
    <div
      className={cn("bg-gray-0", className)}
      {...props}
    />
);
