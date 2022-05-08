import Link from "next/link";

const Footer = () => {
  const gitLink = "https://github.com/BGM-109";
  return (
    <div className="border-t-2 text-center p-6 text-sm text-gray-500 mt-6">
      Created with 💖 by{" "}
      <Link href={gitLink}>
        <a className="underline cursor-pointer" target="_blank">
          @BGM-109
        </a>
      </Link>
    </div>
  );
};

export default Footer;
