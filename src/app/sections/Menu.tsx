import {
  LinkedinLogo,
  InstagramLogo,
  FacebookLogo,
  WhatsappLogo,
  BookOpen,
} from '@phosphor-icons/react/dist/ssr';

export default function Menu(props: any) {
  return (
    <div className="menu justify-between bg-orange-600 p-5 text-white">
      <div className="menu-itens max-w-4xl m-auto flex flex-col md:flex-row justify-between items-center gap-5">
        <div className="flex items-center gap-1">
          <BookOpen size={24} />
          <a href="#ABOUT">QUEM SOMOS</a>
        </div>

        <div className="socials flex gap-2">
          <a className="hover:drop-shadow-lg" href="">
            <LinkedinLogo size={32} color=" #fff" weight="fill" />
          </a>
          <a
            className="hover:drop-shadow-lg"
            href="https://www.instagram.com/ultra.log.br"
          >
            <InstagramLogo size={32} color=" #fff" weight="fill" />
          </a>
          <a className="hover:drop-shadow-lg" href="">
            <FacebookLogo size={32} color=" #fff" weight="fill" />
          </a>
          <a className="hover:drop-shadow-lg" href="">
            <WhatsappLogo size={32} color=" #fff" weight="fill" />
          </a>
        </div>
      </div>
    </div>
  );
}
