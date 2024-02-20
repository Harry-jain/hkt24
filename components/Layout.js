import { Sora } from "@next/font/google";

const sora = Sora({
  subsets: ["latin"],
  variables: "--font-sora",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

import Nav from "../components/Nav";
import Header from "../components/Header";

const Layout = ({ children }) => {
  return (
    <div
      className={`page bg-primary/60 text white ${sora.variables} bg-cover bg-no-repeat  font-sora relative`}
    >
      <Nav />
      <Header />
      {children}
    </div>
  );
};

export default Layout;
