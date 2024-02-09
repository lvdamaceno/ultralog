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
  );
}
