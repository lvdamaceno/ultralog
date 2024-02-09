import { Binoculars, SealCheck, Target } from '@phosphor-icons/react/dist/ssr';

export default function About(props: any) {
  return (
    <div
      id="ABOUT"
      className="about max-w-4xl m-auto border-b-2 border-t-2 mb-10 border-orange-600"
    >
      <h1 className="text-center text-3xl font-semibold text-orange-600 pt-5 pb-5">
        ultra.log.br
      </h1>
      <p className="text-justify p-5 mb-5 md:p-0">
        Com uma abordagem pioneira, a{' '}
        <span className="text-orange-600 font-semibold">ultra.log.br</span> é
        constituído por especialistas com vasto conhecimento em logística.
        Nossas atividades são planejadas para garantir praticidade e proteção ao
        processo, buscando constantemente otimizar os custos e a rentabilidade
        para todas as partes envolvidas - Embarcadores e Operadores. Como
        provedor de serviços logísticos, trabalhamos em duas áreas principais:
        atendimento direto aos clientes e distribuição de última milha para
        outros operadores logísticos.
      </p>
      <div className="about pb-10">
        <div className="flex justify-between flex-col gap-5 md:flex-row">
          <div className=" p-10 flex flex-col gap-5 items-center text-center rounded-lg drop-shadow-lg w-full ">
            <Target size={96} color="#ea580c" weight="fill" />
            <h1 className="uppercase text-2xl text-orange-600">missão</h1>
            <p className="text-zinc-600">
              Garantir a eficiência na movimentação e entrega de mercadorias,
              superando expectativas.
            </p>
          </div>
          <div className=" p-10  flex flex-col gap-5 items-center text-center rounded-lg drop-shadow-lg  w-full ">
            <Binoculars size={96} color="#ea580c" weight="fill" />
            <h1 className="uppercase text-2xl text-orange-600">visão</h1>

            <p className="text-zinc-600">
              Tornar-se líder regional, oferecendo soluções inovadoras e
              sustentáveis para cadeias de suprimentos.
            </p>
          </div>
          <div className=" p-10  flex flex-col gap-5 items-center text-center rounded-lg drop-shadow-lg  w-full ">
            <SealCheck size={96} color="#ea580c" weight="fill" />
            <h1 className="uppercase text-2xl text-orange-600">valores</h1>

            <p className="text-zinc-600">
              Integridade, excelência, colaboração, inovação, responsabilidade
              social e compromisso com a satisfação do cliente.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
