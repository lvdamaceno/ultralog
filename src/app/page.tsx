import {
  MapPinLine,
  LinkedinLogo,
  InstagramLogo,
  FacebookLogo,
  WhatsappLogo,
  GlobeHemisphereWest,
  Package,
  Timer,
  CaretDoubleRight,
  Handshake,
} from '@phosphor-icons/react/dist/ssr';
import Image from 'next/image';
import logo from '/src/app/assets/logo.png';
import banner from '/src/app/assets/principal.jpeg';
import p2p from '/src/app/assets/ship-from.webp';
import sameday from '/src/app/assets/same-day.webp';
import express from '/src/app/assets/ultra-express.jpeg';
import location from '/src/app/assets/location.jpeg';

export default function Home() {
  return (
    <div className=" border-t-4 border-orange-600">
      {/* header */}
      <div className="header flex flex-col items-center md:flex-row justify-between p-2 max-w-4xl m-auto">
        <div className="logo flex items-center">
          <p className="text-4xl font-semibold">ultra.log.br</p>
          <Image src={logo} alt="Logo" quality={50} width={75} />
        </div>
        <div className="side-menu flex gap-5 pr-5">
          <div className="flex items-center gap-2">
            <a
              href="https://parceiros.ultra.log.br/"
              className="flex items-center gap-2 "
            >
              <Handshake size={32} color=" #ea580c" weight="fill" />

              <p className="uppercase">Seja nosso parceiro</p>
            </a>
          </div>
          <div className="flex items-center gap-2">
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
      {/* menu */}
      <div className="menu justify-between bg-orange-600 p-5 text-white">
        <div className="menu-itens max-w-4xl m-auto flex flex-col md:flex-row justify-between items-center ">
          <a href="">HOME</a>
          <a href="">QUEM SOMOS</a>
          <a href="">NOSSOS SERVIÇOS</a>
          <a href="">ÁREA DE ABRANGÊNCIA</a>
          <div className="socials flex gap-2">
            <a href="">
              <LinkedinLogo size={32} color=" #fff" weight="fill" />
            </a>
            <a href="">
              <InstagramLogo size={32} color=" #fff" weight="fill" />
            </a>
            <a href="">
              <FacebookLogo size={32} color=" #fff" weight="fill" />
            </a>
            <a href="">
              <WhatsappLogo size={32} color=" #fff" weight="fill" />
            </a>
          </div>
        </div>
      </div>
      {/* banner */}
      <div className="banner max-w-4xl m-auto pt-5 items-center object-cover ">
        <Image
          src={banner}
          alt="banner"
          quality={100}
          // fill
          // style={{ objectFit: 'cover' }}
        />
      </div>
      <div className="servicos max-w-4xl m-auto">
        <h1 className="uppercase my-10 text-center text-2xl">
          nossos principais serviços
        </h1>
        <div className="cards flex flex-col justify-between gap-5 pb-5 px-5 md:flex-row md:px-0">
          <div className="card border flex flex-col gap-3 rounded-lg overflow-hidden p-2">
            <Image src={p2p} alt="trucks" quality={50} />
            <h1 className="uppercase text-2xl">P2P - SHIP FROM STORE</h1>
            <p className="text-justify">
              Logística direcionada para produtos que tem sua expedição direto
              do Centro de Distribuição diretamente para o consumidor final com
              a entrega podendo ser realizada até no mesmo dia.
            </p>
            <button className="uppercase p-2 bg-orange-600 rounded-lg hover:bg-orange-400">
              saiba mais
            </button>
          </div>
          <div className="card flex border p-2 flex-col gap-3 rounded-lg overflow-hidden">
            <Image src={sameday} alt="trucks" quality={50} />
            <h1 className="uppercase text-2xl">SAME DAY</h1>
            <p className="text-justify">
              Logística voltada para entrega rápida de produtos. Nosso objetivo
              é entregar no menor prazo possível. Indicado para coletas até 14h
              e entrega no mesmo dia até 22h com regiões a definir sob consulta.
            </p>
            <button className="uppercase p-2 bg-orange-600 rounded-lg hover:bg-orange-400">
              saiba mais
            </button>
          </div>
          <div className="card flex border p-2 flex-col gap-3 rounded-lg overflow-hidden">
            <Image src={express} alt="trucks" quality={50} />
            <h1 className="uppercase text-2xl">ultra EXPRESs</h1>
            <p className="text-justify">
              Sempre buscando estar à frente e com inovação estamos
              constantemente buscando melhorias de prazos em toda a nossa
              abrangência. Atuamos em todo a região metropolitana de Belém.
            </p>
            <button className="uppercase p-2 bg-orange-600 rounded-lg hover:bg-orange-400">
              saiba mais
            </button>
          </div>
        </div>
      </div>
      {/* atendimento */}
      <div className="atendimento  pt-5 ">
        <div className="local max-w-4xl m-auto text-center pb-10">
          <h1 className="uppercase text-2xl pb-5">Área de abrangência</h1>
          <h2 className="pb-10">
            Estrategicamente distribuídas, nossas Unidades nos possibilitam
            rapidez e versatilidade nas operações de last mile, transferências e
            logística reversa atendendo mais de 2550 municípios em 21 estados do
            Brasil.
          </h2>
          <div className="image overflow-hidden rounded-xl px-5 md:px-0 md:rounded-xl">
            <Image src={location} alt="Logo" quality={50} />
          </div>
        </div>
        <div className="dados pb-10 bg-orange-600 p-5">
          <div className="max-w-4xl m-auto flex justify-between flex-col gap-5 md:flex-row">
            <div className="border p-10 md:p-20 flex flex-col gap-5 items-center text-center text-2xl uppercase rounded-lg text-white">
              <GlobeHemisphereWest size={128} color="#fff" weight="fill" />
              <p>
                255 <br /> cidades <br />
                atendidas
              </p>
            </div>
            <div className="border p-10 md:p-20 flex flex-col gap-5 items-center text-center text-2xl uppercase rounded-lg text-white">
              <Package size={128} color="#fff" weight="fill" />
              <p>
                8000 <br /> entregas <br />
                diarias
              </p>
            </div>
            <div className="border p-10 md:p-20 flex flex-col gap-5 items-center text-center text-2xl uppercas rounded-lg text-white">
              <Timer size={128} color="#fff" weight="fill" />
              <p>
                8000 <br /> entregas <br />
                diarias
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="institucional max-w-4xl m-auto py-5 ">
        <div className="flex justify-around md:justify-between">
          {/* <div className="logo md:visible">
            <Image src={logo} alt="Logo" quality={50} />
          </div> */}
          <div className="flex flex-col gap-5 md:flex-row ">
            <div className=" px-4">
              <h1 className="uppercase pb-2 font-bold">institucional</h1>
              <span className="flex items-center gap-1 uppercase cursor-pointer text-sm pb-1">
                <CaretDoubleRight /> Home
              </span>
              <span className="flex items-center gap-1 uppercase cursor-pointer text-sm pb-1">
                <CaretDoubleRight /> quem somos
              </span>
              <span className="flex items-center gap-1 uppercase cursor-pointer text-sm pb-1">
                <CaretDoubleRight /> nossos serviços
              </span>
              <span className="flex items-center gap-1 uppercase cursor-pointer text-sm pb-1">
                <CaretDoubleRight /> abrangência
              </span>
            </div>
            <div className=" px-4">
              <h1 className="uppercase pb-2 font-bold">pedidos</h1>
              <span className="flex items-center gap-1 uppercase cursor-pointer text-sm">
                <CaretDoubleRight /> rastrear pedido
              </span>
            </div>
          </div>

          <div className="flex flex-col gap-5 md:flex-row ">
            <div className=" px-4">
              <h1 className="uppercase pb-2 font-bold">redes sociais</h1>
              <span className="flex items-center uppercase cursor-pointer">
                <div className="socials flex">
                  <LinkedinLogo size={32} color=" #ea580c" weight="fill" />
                  <InstagramLogo size={32} color=" #ea580c" weight="fill" />
                  <FacebookLogo size={32} color=" #ea580c" weight="fill" />
                  <WhatsappLogo size={32} color=" #ea580c" weight="fill" />
                </div>
              </span>
            </div>
            <div className="  px-4">
              <h1 className="uppercase pb-2 font-bold">endereço</h1>
              <a
                href="https://maps.app.goo.gl/PJ78d7ShM9ELnuU87"
                className="uppercase text-sm"
              >
                Tv. Santa Maria, 47, Atalaia Ananindeua/PA
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="rodape bg-orange-600 p-8 text-white">
        <h1>ultra.log.br | Todos os direitos reservados</h1>
      </div>
    </div>
  );
}
