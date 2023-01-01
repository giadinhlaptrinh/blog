type SectionContainerProps = {
  children: JSX.Element | JSX.Element[];
};

export default function SectionContainer({ children }: SectionContainerProps) {
  return (
    <div className="mx-auto max-w-full px-4 xl:max-w-5xl xl:px-0">
      {children}
    </div>
  );
}
