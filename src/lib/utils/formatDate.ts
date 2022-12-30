import siteMetadata from "@/constant/siteMetadata";

const formatDate = (date: string | number | Date): string => {
  return new Date(date).toLocaleDateString(siteMetadata.locale, {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

export default formatDate;
