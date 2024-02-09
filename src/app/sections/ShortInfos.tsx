import {
  MapPinLine,
  UsersFour,
  Buildings,
} from '@phosphor-icons/react/dist/ssr';

export default function ShortInfos(props: any) {
  return (
    <div className="dados pb-10 bg-orange-600 p-5">
      <div className="max-w-4xl m-auto flex justify-between flex-col gap-5 md:flex-row">
        <div className="border p-10 md:p-20 flex flex-col gap-5 items-center text-center text-2xl uppercase rounded-lg text-white">
          <UsersFour size={128} color="#fff" weight="fill" />
          <p>Parceiros para todo tipo de tarefa</p>
        </div>
        <div className="border p-10 md:p-20 flex flex-col gap-5 items-center text-center text-2xl uppercase rounded-lg text-white">
          <MapPinLine size={128} color="#fff" weight="fill" />
          <p>rastreabilidade</p>
        </div>
        <div className="border p-10 md:p-20 flex flex-col gap-5 items-center text-center text-2xl uppercase rounded-lg text-white">
          <Buildings size={128} color="#fff" weight="fill" />
          <p>seu negócio mais competitivo</p>
        </div>
      </div>
    </div>
  );
}
