type SectionContainerProps = {
  children: JSX.Element | JSX.Element[];
};

export default function SectionContainer({ children }: SectionContainerProps) {
  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-6 xl:max-w-5xl xl:px-0">
      {children}
    </div>
  );
}
