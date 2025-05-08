import { useEffect } from 'react';
import style from "./Main.module.scss";
import CardLinks from "../Components/Cards/Cards";
import 'aos/dist/aos.css'; 
import * as AOS from 'aos';
import logoPedro from "../assets/LOGO-COMPLETA-PRINCIPAL.png";
import perfilPedro from "../assets/PerfilPedro1x1.jpeg";
import { BiSolidDownArrow } from "react-icons/bi";
import ParticlesComponent from '../Components/Particles/ParticlesComponent';

const scrollToCards = () => {
  document.getElementById("cards")?.scrollIntoView({ behavior: "smooth" });
};

const Main = () => {

  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 50,
    });
  }, []);

  return (
    <section className={style.container}>
        <nav className={style.navbar}>
          <ParticlesComponent />
          <div className={style.content}>
            <div className={style.logo}  data-aos="fade-up" data-aos-delay="200">
              <img src={logoPedro} alt="Logo" />
            </div>
            <div className={style.profile} data-aos="fade-up" data-aos-delay="200">
              <img src={perfilPedro} alt="" />
              <div className={style.titles}>
                <h1>Pedro Cezar</h1>
                <p>Criador de Produtos Digitais</p>
              </div>
            </div>
          </div>
          <div onClick={scrollToCards} className={style.scroll} data-aos="fade-up" data-aos-delay="200">
            <BiSolidDownArrow className='bx bxs-down-arrow' /> 
          </div>
        </nav>
        <div className={style.cardContainer} id='cards' >
            <CardLinks />
        </div>
        <div className={style.footer}  data-aos="fade-up" data-aos-delay="200">
          <img src={logoPedro} alt="Logo" />
        </div>
    </section>
  )
}

export default Main;