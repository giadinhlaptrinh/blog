import { isValidElement, useEffect, useRef, useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

const filterNode = (nodes: React.ReactNode, name: string): any => {
  if (Array.isArray(nodes)) {
    return nodes.filter(
      (children: React.ReactNode) =>
        isValidElement(children) && (children.type as any).name === name
    );
  }
  return isValidElement(nodes) && (nodes.type as any).name === name
    ? nodes
    : undefined;
};

type DisclosureProps = {
  children: React.ReactNode;
};

const GdDisclosure = ({ children }: DisclosureProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  const header = filterNode(children, GdDisclosureHeader.name);
  const body = filterNode(children, GdDisclosureContent.name);

  useEffect(() => {
    if (contentRef.current) {
      if (isOpen) {
        contentRef.current.style.maxHeight =
          contentRef.current?.scrollHeight + "px";
      } else {
        contentRef.current.style.maxHeight = "0px";
      }
    }
  });

  return (
    <div className="py-6 px-4 lg:py-8 lg:px-8">
      <div className="flex justify-between items-start gap-6">
        <div>{header}</div>
        <button
          className="py-1 px-0 lg:px-2 cursor-pointer text-gray-600 hover:text-indigo-700"
          onClick={() => setIsOpen(!isOpen)}
        >
          <ChevronDownIcon
            className={`${
              isOpen && "rotate-180"
            } transition-transform duration-300 h-6 lg:h-8`}
          />
        </button>
      </div>
      <div
        className="transition-all duration-300 overflow-hidden"
        ref={contentRef}
      >
        <div className="pt-6 ">{body}</div>
      </div>
    </div>
  );
};

export const GdDisclosureHeader = ({
  children,
  ...props
}: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  return <div {...props}>{children}</div>;
};

export const GdDisclosureContent = ({
  children,
  ...props
}: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  return <div {...props}>{children}</div>;
};

GdDisclosure.Header = GdDisclosureHeader;
GdDisclosure.Content = GdDisclosureContent;

export default GdDisclosure;
