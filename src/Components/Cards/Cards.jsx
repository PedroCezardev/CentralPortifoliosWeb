import style from "./Cards.module.scss";
import { useEffect } from 'react';
import 'aos/dist/aos.css'; 
import AOS from 'aos';
// importando images
import paginaVendas from "../../assets/PaginaVendas.png";
import meuPortifolio from "../../assets/MeuPortifolio2.png";
import nextechWebsite from "../../assets/NextechWebsite.png";
import instagramWhite from "../../assets/InstagramWhite.png";
import tiktokWhite from "../../assets/TiktokWhite.png";
import linkedlin from "../../assets/LinkedlinWhite.png"
import githubBlack from "../../assets/GithubBlack.png";
import nextechIcon from "../../assets/LogoNexTech.png";
// importando icons
import { MdArrowOutward } from "react-icons/md";
import { CgWebsite } from "react-icons/cg";
import { FaInstagramSquare } from "react-icons/fa";
import { AiFillTikTok } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const CardList = [
    {
        id: 1,
        image: paginaVendas,
        icon: <MdArrowOutward />,
        title: "Realizar orçamento",
        description: "Solicite um orçamento para ter seu próprio site feito por mim.",
        link: "https://api.whatsapp.com/send?phone=985964761",
    },
    {
        id: 2,
        image: meuPortifolio,
        icon: <CgWebsite />,
        title: "Portifólio Profissional",
        description: "Analise meu portfólio para conhecer meus projetos acadêmicos e as tecnologias com as quais tenho experiência.",
        link: "https://meu-portifolio-lime.vercel.app/",
    },
    {
        id: 3,
        image: nextechWebsite,
        icon: <img src={nextechIcon} alt="Nextech Icon" />,
        title: "Website da NEXTECH",
        description: "Acesse o website da empresa de desenvolvimento de sites na qual sou sócio.",
        link: "",
    },
    {
        id: 4,
        image: instagramWhite,
        icon: <FaInstagramSquare />,
        title: "Perfil no Instagram",
        description: "Vídeos e conteúdos sobre tecnologia gratuitos.",
        link: "https://www.instagram.com/opedro.sites/",
    },
    {
        id: 5,
        image: tiktokWhite,
        icon: <AiFillTikTok />,
        title: "Perfil no Tiktok",
        description: "Vídeos e conteúdos sobre tecnologia gratuitos.",
        link: "https://www.tiktok.com/@opedro.sites",
    },
    {
        id: 6,
        image: linkedlin,
        icon: <FaLinkedin />,
        title: "Perfil no Linkedin",
        description: "Conteúdos profissional e acadêmicos.",
        link: "https://www.linkedin.com/in/pedro-cezarr/",
    },
    {
        id: 7,
        image: githubBlack,
        icon: <FaGithub />,
        title: "Perfil no Github",
        description: "Onde eu publico meu projeto pessoais e acadêmicos.",
        link: "https://github.com/PedroCezardev", 
    }
]

const CardLinks = () => {

    useEffect(() => {
        AOS.init({
          duration: 600,
          offset: 50,
        });
    }, []);

    return (
      <section className={style.container}>
        {CardList.map((data, i) => (
            <a key={data.id} className={style.content} data-aos="fade-up" data-aos-delay={i * 200}
                href={data.link} target="_blank" rel="noopener noreferrer"
            >
                <div className={style.background} 
                    style={{ backgroundImage: `url(${data.image})` }} 
                />
                <div className={style.overlay}>
                    <div>{data.icon}</div>
                    <h1>{data.title}</h1>
                    <p>{data.description}</p>
                </div>
            </a>
        ))}
      </section>
    );
  }
  
  export default CardLinks;
