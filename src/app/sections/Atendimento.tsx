import Image from 'next/image';
import location from '/src/app/assets/location.jpeg';

export default function Atendimento(props: any) {
  return (
    <div className="atendimento  pt-5 ">
      <div className="local max-w-4xl m-auto text-center pb-10">
        <h1 className="uppercase text-2xl pb-5">Área de abrangência</h1>
        <h2 className="pb-10 ">
          Estamos empenhados ao máximo para expandir nossa cobertura e atender
          toda a região Norte do Brasil. Atualmente, já marcamos presença na
          região metropolitana de Belém e estamos trabalhando incansavelmente
          para levar nossos serviços a cada vez mais localidades, garantindo
          acesso e comodidade aos nossos clientes em toda a vasta região norte.
        </h2>
        <div className="image overflow-hidden rounded-xl px-5 md:px-0 md:rounded-xl">
          <Image src={location} alt="Logo" quality={50} />
        </div>
      </div>
    </div>
  );
}
