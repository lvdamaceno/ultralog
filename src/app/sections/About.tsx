import { Binoculars, SealCheck, Target } from '@phosphor-icons/react/dist/ssr';

export default function About(props: any) {
  return (
    <div
      id="ABOUT"
      className="about max-w-4xl m-auto border-t-2 border-orange-600"
    >
      <h1 className="text-center text-3xl font-semibold text-orange-600 pt-5 pb-5">
        ultra.log.br
      </h1>
      <p className="text-justify p-5 mb-5 md:p-0">
        A <span className="text-orange-600 font-semibold">ultra.log.br</span>{' '}
        conta com uma equipe de especialistas com grande experiência em
        logística. Planejamos nossas atividades para tornar o processo prático e
        seguro, sempre com o objetivo de reduzir custos e aumentar a
        rentabilidade tanto para Embarcadores quanto para Operadores. Como
        fornecedores de serviços logísticos, nos focamos principalmente em dois
        aspectos: atendimento direto aos clientes e distribuição de última milha
        para outros operadores logísticos.
      </p>
      <div className="about pb-10">
        <div className="flex justify-between flex-col gap-5 md:flex-row">
          <div className=" p-10 flex flex-col gap-5 items-center text-center rounded-lg drop-shadow-lg w-full ">
            <Target size={96} color="#ea580c" weight="fill" />
            <h1 className="uppercase text-2xl text-orange-600">missão</h1>
            <p className="text-zinc-600">
              Nosso objetivo é tornar a movimentação e entrega de mercadorias
              eficiente, sempre buscando superar as expectativas.
            </p>
          </div>
          <div className=" p-10  flex flex-col gap-5 items-center text-center rounded-lg drop-shadow-lg  w-full ">
            <Binoculars size={96} color="#ea580c" weight="fill" />
            <h1 className="uppercase text-2xl text-orange-600">visão</h1>

            <p className="text-zinc-600">
              Nosso objetivo é ser líder regional, trazendo soluções criativas e
              sustentáveis para as cadeias de suprimentos.
            </p>
          </div>
          <div className=" p-10  flex flex-col gap-5 items-center text-center rounded-lg drop-shadow-lg  w-full ">
            <SealCheck size={96} color="#ea580c" weight="fill" />
            <h1 className="uppercase text-2xl text-orange-600">valores</h1>

            <p className="text-zinc-600">
              Integridade, qualidade, trabalho em equipe, inovação,
              responsabilidade social e foco na satisfação do cliente.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
