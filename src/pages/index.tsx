import Image from "next/image";

const Home = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full h-full gap-24">
      <Image src="/assets/logo.png" alt="logo" width="100" height="100" />
      <p>Your gamified learning platform</p>
    </div>
  );
};

export default Home;
