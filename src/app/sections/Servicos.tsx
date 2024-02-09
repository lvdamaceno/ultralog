import Servico from '../components/Servico';

import banner from '/src/app/assets/banner.jpeg';

import p2p from '/src/app/assets/servicos/ship-from.jpeg';
import sameday from '/src/app/assets/servicos/same-day.jpeg';
import express from '/src/app/assets/servicos/ultra-express.jpeg';
import montagem from '/src/app/assets/servicos/montagem.jpeg';
import firstmile from '/src/app/assets/servicos/first-mile.jpeg';
import reversa from '/src/app/assets/servicos/reversa.jpg';
import b2c from '/src/app/assets/servicos/b2c.jpg';
import especiais from '/src/app/assets/servicos/especiais.jpg';

import fracionado from '/src/app/assets/servicos/fracionado.jpeg';

export default function Servicos(props: any) {
  return (
    <div className="servicos max-w-4xl m-auto">
      <h1 className="uppercase my-10 text-center text-2xl">
        nossos principais serviços
      </h1>
      <div className="cards flex flex-col justify-between gap-5 pb-5 px-5 md:flex-row md:px-0">
        <Servico
          title="MONTAGEM"
          text="Este serviço é projetado para garantir que seus móveis sejam montados corretamente, com segurança e sem danos, proporcionando comodidade e tranquilidade, consulte nossa área de abrangência."
          src={montagem}
        />
        <Servico
          title="P2P "
          text="Gestão de envio de produtos com saída direta do centro de distribuição para o endereço do cliente, com entregas que podem ser efetuadas até o final do dia."
          src={p2p}
        />
        <Servico
          title="SAME DAY"
          text="Soluções logísticas para entregas aceleradas. Nosso alvo é a menor janela de tempo para entrega, ideal para pedidos feitos até 14h com entrega garantida até 22h em áreas selecionadas, mediante consulta."
          src={sameday}
        />
      </div>
      <div className="cards flex flex-col justify-between gap-5 pb-5 px-5 md:flex-row md:px-0">
        <Servico
          title="FIRST-MILE
            "
          text="Serviço especializado em coleta de produtos em vendedores, com alternativas de envio local e devoluções centralizadas, organizado pelo transportador."
          src={firstmile}
        />
        <Servico
          title="LOGÍSTICA REVERSA
            "
          text="Soluções logísticas voltadas para o suporte ao cliente e processos de devolução de produtos. Cobertura e prazos disponíveis sob consulta."
          src={reversa}
        />
        <Servico
          title="ENTREGA DIRETA B2C
            "
          text="Estratégias de entrega para transações do negócio para o consumidor até 30 kg, com flexibilidade em volume. Cobertura e prazos disponíveis mediante consulta.
            "
          src={b2c}
        />
      </div>

      <div className="cards flex flex-col justify-between gap-5 pb-5 px-5 md:flex-row md:px-0">
        <Servico
          title="PROJETOS ESPECIAIS"
          text="Criamos soluções sob medida para atender às exigências específicas dos nossos clientes. Disponibilidade e prazos sob consulta.
            "
          src={especiais}
        />
        <Servico
          title="ultra EXPRESs"
          text="Comprometidos em liderar com inovações e melhorias contínuas em prazos, abrangendo toda nossa área de serviço. Presentes em toda a região metropolitana de Belém."
          src={express}
        />
        <Servico
          title="FRACIONADO"
          text="Logística adaptada para B2C para itens acima de 30 kg, com prazos e áreas de serviço sob consulta."
          src={fracionado}
        />
      </div>
    </div>
  );
}
