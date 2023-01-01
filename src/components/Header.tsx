import siteMetadata from "@/constant/siteMetadata";
import headerNavLinks from "@/constant/headerNavLinks";

import Link from "./Link";
import MobileNav from "./MobileNav";
import ThemeSwitch from "./ThemeSwitch";

export default function Header() {
  return (
    <header className="flex items-center justify-between py-8 md:py-10 border-b border-gray-200 dark:border-slate-700">
      <div className="container">
        <div className="flex items-center justify-between">
          <MobileNav />
          <Link href="/" aria-label={siteMetadata.siteName}>
            <div className="flex items-center justify-between">
              {/* <div className="mr-3">
                <Logo />
              </div> */}
              <div className="hidden sm:block h-6 text-3xl font-semibold">
                {siteMetadata.siteName}
              </div>
            </div>
          </Link>

          <div className="flex items-center text-base leading-5">
            <div className="hidden sm:block">
              {headerNavLinks.map((link) => (
                <Link
                  key={link.title}
                  href={link.href}
                  className="p-1 font-medium text-gray-900 dark:text-gray-100 sm:p-4"
                >
                  {link.title}
                </Link>
              ))}
            </div>
            <ThemeSwitch />
          </div>
        </div>

        <div className="flex sm:hidden items-center justify-center mt-5">
          <Link href="/" aria-label={siteMetadata.siteName}>
            {/* <div className="mr-3">
                <Logo />
              </div> */}
            <div className="text-3xl font-semibold">
              {siteMetadata.siteName}
            </div>
          </Link>
        </div>
      </div>
    </header>
  );
}
