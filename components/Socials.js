import Link from "next/link";
import { BsInstagram } from "react-icons/bs";
import { ImLinkedin2 } from "react-icons/im";

const Socials = () => {
  return (
    <div className="flex items-center gap-x-5 text-lg text-white">
      <Link
        href={"https://www.instagram.com/eesa.vit/"}
        className="hover:text-accent transition-all duration-300"
      >
        <BsInstagram />
      </Link>
      <Link
        href={"https://www.linkedin.com/company/eesa-vit/about/"}
        className="hover:text-accent transition-all duration-300"
      >
        <ImLinkedin2 />
      </Link>
    </div>
  );
};

export default Socials;
