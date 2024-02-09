import Image from 'next/image';
import banner from '/src/app/assets/banner.jpeg';

export default function Banner(props: any) {
  return (
    <div className="banner drop-shadow-xl max-w-4xl m-auto pt-5 items-center object-cover ">
      <Image src={banner} alt="banner" quality={100} />
    </div>
  );
}
