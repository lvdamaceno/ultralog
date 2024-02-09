import {
  LinkedinLogo,
  InstagramLogo,
  FacebookLogo,
  WhatsappLogo,
} from '@phosphor-icons/react/dist/ssr';

export default function Menu(props: any) {
  return (
    <div className="menu justify-between bg-orange-600 p-5 text-white">
      <div className="menu-itens max-w-4xl m-auto flex flex-col md:flex-row justify-between items-center gap-5">
        <div className="flex gap-5">
          <a href="">HOME</a>
          <a href="">QUEM SOMOS</a>
        </div>

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
  );
}
