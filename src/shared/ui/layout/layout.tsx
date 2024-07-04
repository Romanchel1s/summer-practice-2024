import { Header } from "../../../components/header/header";
import { Footer } from "../../../components/footer/footer";
import { ReactNode } from "react";

type LayoutProps = {
    children?: ReactNode;
  };

  const Layout = ({ children }: LayoutProps) => {
    return (
    <>
        <Header />
        <main>{children}</main>
        <Footer />
    </>
    )
  }

  export default Layout;