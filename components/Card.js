import Image from "next/image";
import Link from "next/link";

const Card = ({ gym }) => {
  const { name, logo, shopLink } = gym.attributes;
  const { url } = logo.data.attributes;
  return (
    <Link href={shopLink}>
      <a target="_blank" className="">
        <div className="cursor-pointer border-2 border-black px-5 py-4 rounded-lg hover:-translate-y-2 hover:-translate-x-2 transition duration-300 space-y-2">
          <Image
            src={url}
            width={45}
            height={45}
            alt={gym.attributes.name}
            className="rounded-full"
          />
          <h3 className="font-semibold text-base">{name}</h3>
          <p className="text-xs">{shopLink}</p>
        </div>
      </a>
    </Link>
  );
};

export default Card;
