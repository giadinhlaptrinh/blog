import GoogleAnalytics from "./GoogleAnalytics";
import siteMetadata from "@/constant/siteMetadata";

const isProduction = process.env.NODE_ENV === "production";

const Analytics = () => {
  return (
    <>
      {isProduction && siteMetadata.analytics.googleAnalyticsId && (
        <GoogleAnalytics />
      )}
    </>
  );
};

export default Analytics;
