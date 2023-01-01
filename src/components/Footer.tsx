import Link from "./Link";
import siteMetadata from "@/constant/siteMetadata";
import SocialIcon from "@/components/social-icons";

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 dark:border-slate-700">
      <div className="mt-16 flex flex-col items-center">
        <div className="mb-3 flex space-x-4">
          <SocialIcon
            kind="mail"
            href={`mailto:${siteMetadata.email}`}
            size="6"
          />
          <SocialIcon kind="github" href={siteMetadata.github} size="6" />
          <SocialIcon kind="facebook" href={siteMetadata.facebook} size="6" />
          <SocialIcon kind="youtube" href={siteMetadata.youtube} size="6" />
          {/*
          TODO: Not implemented
          <SocialIcon kind="linkedin" href={siteMetadata.linkedin} size="6" />
          <SocialIcon kind="twitter" href={siteMetadata.twitter} size="6" /> 
          */}
        </div>
        <div className="mb-4 md:flex space-x-2 text-sm text-gray-500 dark:text-gray-400">
          <div className="mb-2">Made with ❤️ by {siteMetadata.author}</div>
          <div className="hidden md-block">{` • `}</div>
          <div>
            <span>{`© ${new Date().getFullYear()} `}</span>
            <Link href="/">{siteMetadata.title}</Link>
          </div>
        </div>
        <div className="mb-8 text-sm text-gray-500 dark:text-gray-400">
          <Link href="https://github.com/giadinhlaptrinh/blog">
            Next JS Blog with Tailwind and Typescript
          </Link>
        </div>
      </div>
    </footer>
  );
}
