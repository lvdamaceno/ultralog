import {
  MapPinLine,
  UsersFour,
  Buildings,
} from '@phosphor-icons/react/dist/ssr';

export default function ShortInfos(props: any) {
  return (
    <div className="dados pb-10 bg-orange-600 p-10">
      <div className="max-w-4xl m-auto flex justify-between flex-col gap-5 md:flex-row">
        <div className="border p-10  flex flex-col gap-5 items-center text-center text-2xl uppercase rounded-lg text-white drop-shadow-lg w-full">
          <UsersFour size={128} color="#fff" weight="fill" />
          <p>Parceiros para todo tipo de tarefa</p>
        </div>
        <div className="border p-10  flex flex-col gap-5 items-center text-center text-2xl uppercase rounded-lg text-white drop-shadow-lg w-full">
          <MapPinLine size={128} color="#fff" weight="fill" />
          <p>rastreabilidade</p>
        </div>
        <div className="border p-10  flex flex-col gap-5 items-center text-center text-2xl uppercase rounded-lg text-white drop-shadow-lg w-full">
          <Buildings size={128} color="#fff" weight="fill" />
          <p>seu negócio mais competitivo</p>
        </div>
      </div>
    </div>
  );
}
