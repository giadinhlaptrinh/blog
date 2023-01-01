import Footer from "./Footer";
import Header from "./Header";

type LayoutWrapperProps = {
  children: React.ReactNode;
};

const LayoutWrapper = ({ children }: LayoutWrapperProps) => {
  return (
    <div className="flex h-screen flex-col justify-between">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default LayoutWrapper;
