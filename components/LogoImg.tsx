import Image from "next/image";

const LogoImg = () => {
  return (
    <div>
      <Image
        src="/assets/icons/logo-full.svg"
        alt="logo"
        width={150}
        height={150}
        unoptimized
      />
    </div>
  );
};

export default LogoImg;
