import Link from "next/link";
import Image from "next/image";
import Socials from "../components/Socials";

const Header = () => {
  return (
    <header className="absolute z-30 w-full flex items-center px-16 xl:px-0 xl:h-[90px]">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row lg:justify-between justify-center items-center gap-y-6 py-8">
          <Link href={"/"}>
            <span className="text-3xl font-bold "><span className="text-accent text-4xl">Dipesh</span> Chauhan</span>
          </Link>
          <Socials />
        </div>
      </div>
    </header>
  );
};

export default Header;
