import Servico from '../components/Servico';

import banner from '/src/app/assets/principal.jpeg';
import p2p from '/src/app/assets/ship-from.webp';
import sameday from '/src/app/assets/same-day.webp';
import express from '/src/app/assets/ultra-express.jpeg';

export default function Servicos(props: any) {
  return (
    <div className="servicos max-w-4xl m-auto">
      <h1 className="uppercase my-10 text-center text-2xl">
        nossos principais serviços
      </h1>
      <div className="cards flex flex-col justify-between gap-5 pb-5 px-5 md:flex-row md:px-0">
        <Servico
          title="MONTAGEM"
          text="Oferecemos serviços profissionais de montagem de móveis para tornar sua casa mais funcional e elegante"
          src={banner}
        />
        <Servico
          title="P2P "
          text="Logística focada em expedições do Centro de Distribuição ao consumidor, potencialmente com entrega no mesmo dia."
          src={p2p}
        />
        <Servico
          title="SAME DAY"
          text="Logística rápida: coletas até 14h, entrega até 22h no mesmo dia, com regiões definidas sob consulta."
          src={sameday}
        />
      </div>
      <div className="cards flex flex-col justify-between gap-5 pb-5 px-5 md:flex-row md:px-0">
        <Servico
          title="FIRST-MILE
            "
          text="Serviço de coleta em Sellers, com opções de postagem local pela ECT e devolução para HUB centralizador."
          src={banner}
        />
        <Servico
          title="LOGÍSTICA REVERSA
            "
          text="Logística para SAC, troca e retirada de produtos. Prazos e abrangência disponíveis mediante consulta."
          src={banner}
        />
        <Servico
          title="ENTREGA DIRETA B2C
            "
          text="Logística para operações B2C com até 30 kg e múltiplos volumes. Prazos e abrangência mediante consulta.
            "
          src={banner}
        />
      </div>

      <div className="cards flex flex-col justify-between gap-5 pb-5 px-5 md:flex-row md:px-0">
        <Servico
          title="PROJETOS ESPECIAIS"
          text="Operações personalizadas para atender às necessidades dos clientes. Prazos e alcance disponíveis mediante consulta.
            "
          src={banner}
        />
        <Servico
          title="ultra EXPRESs"
          text="Constantemente inovando para melhorar prazos em toda a região metropolitana de Belém, mantendo liderança e eficiência."
          src={express}
        />
        <Servico
          title="FRACIONADO"
          text="Logística direcionada para operações de B2C e B2B acima de 30 kg. Prazos e abrangência sob consulta."
          src={banner}
        />
      </div>
    </div>
  );
}
