import siteMetadata from "@/constant/siteMetadata";
import { PageSEO } from "@/components/SEO";

const Contact = () => {
  return (
    <>
      <PageSEO
        title={`Contact - ${siteMetadata.siteName}`}
        description={siteMetadata.description}
      />

      <div className="space-y-2 pt-6 pb-8 md:space-y-5">
        <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14">
          Contact
        </h1>
      </div>
      <div>
        <div>Email: truonghungit@gmail.com 😁</div>
      </div>
    </>
  );
};

export default Contact;
