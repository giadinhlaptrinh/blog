import { ReactNode } from "react";

type PageTitleProps = {
  children: ReactNode;
};

export default function PageTitle({ children }: PageTitleProps) {
  return (
    <h1 className="text-3xl font-bold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-tight">
      {children}
    </h1>
  );
}
