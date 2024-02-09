import Image from 'next/image';
import logo from '/src/app/assets/logo.png';

import { MapPinLine, Handshake } from '@phosphor-icons/react/dist/ssr';

export default function Header(props: any) {
  return (
    <div className="header flex flex-col items-center md:flex-row justify-between p-2 max-w-4xl m-auto">
      <div className="logo flex items-center">
        <p className="text-4xl font-semibold">ultra.log.br</p>
        <Image src={logo} alt="Logo" quality={50} width={75} />
      </div>
      <div className="side-menu flex gap-5 justify-between px-2">
        <div className=" flex items-center gap-2 text-center">
          <a
            href="https://parceiros.ultra.log.br/"
            className="flex items-center gap-2 "
          >
            <Handshake size={32} color=" #ea580c" weight="fill" />
            <p className="uppercase">Seja nosso parceiro</p>
          </a>
        </div>
        <div className=" flex items-center gap-2 text-center">
          <a
            href="https://cademeupedido.fusiondms.com.br/"
            className="flex items-center gap-2 "
          >
            <MapPinLine size={32} color=" #ea580c" weight="fill" />
            <p className="uppercase">Rastreie seu pedido</p>
          </a>
        </div>
      </div>
    </div>
  );
}
