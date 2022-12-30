import Link from "next/link";

type CustomLinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement>;

const CustomLink = ({ href, ...rest }: CustomLinkProps) => {
  const isInternalLink = href && href.startsWith("/");
  const isAnchorLink = href && href.startsWith("#");

  if (isInternalLink) {
    return <Link href={href} {...rest}></Link>;
  }

  if (isAnchorLink) {
    return <a href={href} {...rest} />;
  }

  return <a target="_blank" rel="noopener noreferrer" href={href} {...rest} />;
};

export default CustomLink;