import { ReactNode, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  return (
    <div className="relative min-h-screen flex flex-col bg-background text-foreground selection:bg-primary/30">
      <Header />
      <main className="relative flex-grow">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
