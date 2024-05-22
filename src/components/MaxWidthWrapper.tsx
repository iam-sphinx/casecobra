import { cn } from "@/lib/utils";
import { ReactNode } from "react";

type props = {
  className?: string;
  children: ReactNode;
};
const MaxWidthWrapper = ({ className, children }: props) => {
  return (
    <div
      className={cn(
        "h-full mx-auto w-full max-w-screen-xl px-2.5 md:px-20",
        className
      )}
    >
      {children}
    </div>
  );
};

export default MaxWidthWrapper;
