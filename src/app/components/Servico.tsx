import Image from 'next/image';

export default function Servico(props: any) {
  return (
    <div className="card border flex flex-col gap-2 rounded-lg overflow-hidden p-2 hover:shadow-2xl w-full">
      <div className="w-full rounded-lg ">
        <Image src={props.src} alt="image" quality={50} />
      </div>
      <div className=" flex flex-col gap-2">
        <h1 className="uppercase text-2xl h-6 text-center">{props.title}</h1>
        <p className="text-center text-zinc-700">{props.text}</p>
      </div>
    </div>
  );
}
