import Image from 'next/image';
import sameday from '/src/app/assets/same-day.webp';

export default function Servico(props: any) {
  return (
    <div className="card border flex flex-col gap-3 rounded-lg overflow-hidden p-2">
      <Image src={props.src} alt="trucks" quality={50} />
      <h1 className="uppercase text-2xl">{props.title}</h1>
      <p className="text-justify">{props.text}</p>
    </div>
  );
}
