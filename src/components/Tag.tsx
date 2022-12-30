import Link from "next/link";
import kebabCase from "@/lib/utils/kebabCase";

type TagProps = {
  text: string;
};

const Tag = ({ text }: TagProps) => {
  return (
    <Link href={`/tags/${kebabCase(text)}`}>
      <span className="mr-3 text-sm cursor-pointer font-medium uppercase text-primary-500 hover:text-primary-600 dark:hover:text-primary-400">
        {text.split(" ").join("-")}
      </span>
    </Link>
  );
};

export default Tag;
