import ShortInfos from './sections/ShortInfos';
import Institucional from './sections/Institucional';
import Atendimento from './sections/Atendimento';
import Servicos from './sections/Servicos';
import Banner from './sections/Banner';
import Menu from './sections/Menu';
import Header from './sections/Header';
import Footer from './sections/Footer';

import About from './sections/About';

export default function Home() {
  return (
    <div className=" border-t-4 border-orange-600">
      <Header />
      <Menu />
      <Banner />
      <Servicos />
      <Atendimento />
      <About />
      <ShortInfos />
      <Institucional />
      <Footer />
    </div>
  );
}
