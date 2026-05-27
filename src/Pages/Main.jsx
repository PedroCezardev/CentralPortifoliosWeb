import { useEffect } from 'react';
import style from "./Main.module.scss";
import CardLinks from "../Components/Cards/Cards";
import 'aos/dist/aos.css';
import AOS from 'aos';
import perfilPedro from "../assets/image-pedro1.jpeg";
import logoPedro from "../assets/LOGO-COMPLETA-PRINCIPAL.png";
import lnkdPerfilLogo from "../assets/LNKD-PERFIL.png";
import wordmarkLogo from "../assets/LOGO-COMPLETA-PRINCIPAL.png";
import ParticlesComponent from '../Components/Particles/ParticlesComponent';
import CustomCursor from '../Components/CustomCursor/CustomCursor';

const Main = () => {

  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 50,
      once: true
    });
  }, []);

  return (
    <section className={style.container}>
      <CustomCursor />
      <ParticlesComponent />

      <div className={style.glassWrapper} data-aos="fade-up">
        <header className={style.header}>
          <div className={style.profileImageWrapper}>
            <img src={perfilPedro} alt="Pedro Cezar" className={style.profileImage} />
          </div>

          <img src={wordmarkLogo} alt="Pedro Cezar" className={style.wordmarkLogo} />
          <p className={style.tagline}>Transformando ideias em soluções digitais de alto impacto!</p>

          <div className={style.statsContainer}>
            <div className={style.statItem}>
              <h3>Web</h3>
              <p>Designer</p>
            </div>
            <div className={style.statDivider}></div>
            <div className={style.statItem}>
              <h3>+3 Anos</h3>
              <p>Experiência</p>
            </div>
            <div className={style.statDivider}></div>
            <div className={style.statItem}>
              <h3>SIN</h3>
              <p>Graduado</p>
            </div>
          </div>
        </header>

        <div className={style.cardContainer} id='cards'>
          <CardLinks />
        </div>

        <div className={style.footerLogoWrapper}>
          <img src={logoPedro} alt="Logo" className={style.footerLogo} />
          <p className={style.copyright}>© 2026 PEDRO CEZAR SITES. Todos os direitos reservados.</p>
        </div>
      </div>

      <footer className={style.pageFooter} data-aos="fade-up" data-aos-delay="200">
        <div className={style.footerContent}>
          <div className={style.footerText}>
            <img src={lnkdPerfilLogo} alt="LNKD Perfil" className={style.lnkdLogo} />
            <p>Eleve seu posicionamento digital</p>
          </div>
          <div className={style.footerDivider}></div>
          <a href="https://www.lnkdperfil.com.br/solicitar/vortex" target="_blank" rel="noopener noreferrer" className={style.footerButton}>
            TENHA JÁ O SEU
          </a>
        </div>
      </footer>

    </section>
  )
}

export default Main;