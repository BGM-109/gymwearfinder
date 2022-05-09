import Link from "next/link";
import {
  AiOutlineMenu,
  AiOutlineTwitter,
  AiOutlineGithub,
} from "react-icons/ai";

const Header = ({ isScrolled }) => {
  const headerClassname = `bg-white z-10 flex items-center justify-between px-4 py-5 font-semibold text-sm border-b-[1px] ${
    isScrolled ? "fixed inset-x-0 top-0" : ""
  }`;
  const gitLink = "https://github.com/BGM-109/gymwearfinder";
  return (
    <div className="">
      <div className="bg-black text-white py-3 text-center text-sm">
        <Link href={gitLink}>
          <a target="_blank">⭐️ 별주세요 ⭐️</a>
        </Link>
      </div>
      <div className={headerClassname}>
        <Link href="/">
          <h1 className="whitespace-nowrap cursor-pointer">
            Gymwear Finder 🚀
          </h1>
        </Link>

        {/* <div className="w-full px-4 flex items-center space-x-2">
          <AiOutlineMenu className="w-5 h-5" />
          <p>Menu</p>
        </div> */}
        <div className="flex space-x-4 p-0.5">
          <p>
            <AiOutlineTwitter className="w-5 h-5" />
          </p>
          <Link href={gitLink} className="cursor-pointer">
            <a target="_blank">
              <AiOutlineGithub className="w-5 h-5" />
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
