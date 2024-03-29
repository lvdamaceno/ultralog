import {
  LinkedinLogo,
  InstagramLogo,
  FacebookLogo,
  WhatsappLogo,
  CaretDoubleRight,
} from '@phosphor-icons/react/dist/ssr';

export default function Institucional(props: any) {
  return (
    <div className="institucional max-w-4xl m-auto py-5 ">
      <div className="flex justify-around md:justify-between">
        <div className="flex flex-col gap-5 md:flex-row w-full">
          <div
            className=" px-4 w-full flex flex-col
           items-center"
          >
            <h1 className="uppercase pb-2 font-bold">institucional</h1>
            <a
              href="#ABOUT"
              className="flex items-center gap-1 uppercase text-sm pb-1"
            >
              <CaretDoubleRight /> quem somos
            </a>
          </div>
          <div
            className=" px-4 w-full  flex flex-col
           items-center"
          >
            <h1 className="uppercase pb-2 font-bold">pedidos</h1>
            <span className="flex items-center gap-1 uppercase cursor-pointer text-sm">
              <CaretDoubleRight /> rastrear pedido
            </span>
          </div>
        </div>

        <div className="flex flex-col gap-5 md:flex-row w-full">
          <div
            className=" px-4 w-full  flex flex-col
           items-center"
          >
            <h1 className="uppercase pb-2 font-bold">redes sociais</h1>
            <span className="flex items-center uppercase cursor-pointer">
              <div className="socials flex">
                <a className="hover:drop-shadow-lg" href="">
                  <LinkedinLogo size={40} color=" #ea580c" weight="fill" />
                </a>
                <a
                  className="hover:drop-shadow-lg target:"
                  href="https://www.instagram.com/ultra.log.br"
                >
                  <InstagramLogo size={40} color=" #ea580c" weight="fill" />
                </a>
                <a className="hover:drop-shadow-lg" href="">
                  <FacebookLogo size={40} color=" #ea580c" weight="fill" />
                </a>
                <a className="hover:drop-shadow-lg" href="">
                  <WhatsappLogo size={40} color=" #ea580c" weight="fill" />
                </a>
              </div>
            </span>
          </div>
          <div
            className="  px-4 w-full  flex flex-col
           items-center"
          >
            <h1 className="uppercase pb-2 font-bold">endereço</h1>
            <a
              href="https://maps.app.goo.gl/PJ78d7ShM9ELnuU87"
              className="uppercase text-sm text-center"
            >
              Tv. Santa Maria, 47, Atalaia Ananindeua/PA
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
