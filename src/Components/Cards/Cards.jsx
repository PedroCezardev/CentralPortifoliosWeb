import style from "./Cards.module.scss";
import { useEffect } from 'react';
import 'aos/dist/aos.css';
import AOS from 'aos';

// importando icons
import { MdOutlineArrowOutward } from "react-icons/md";
import { CgWebsite } from "react-icons/cg";
import { FaInstagram, FaTiktok, FaLinkedin, FaGithub, FaShoppingCart, FaRocket, FaUserSecret } from "react-icons/fa";

const CardList = [
    {
        id: 1,
        icon: <CgWebsite />,
        title: "Realizar orçamento",
        description: "Solicite um orçamento para o seu projeto",
        link: "https://pedrocezar-orcamento.vercel.app/",
        isHighlighted: true
    },
    {
        id: 2,
        icon: <CgWebsite />,
        title: "LNKD PERFIL",
        description: "Adquira seu link na bio profissional",
        link: "https://www.lnkdperfil.com.br/",
    },
    {
        id: 3,
        icon: <FaInstagram />,
        title: "Perfil no Instagram",
        description: "Acompanhe meu dia a dia e dicas",
        link: "https://www.instagram.com/opedro.sites/",
    },
    {
        id: 4,
        icon: <FaTiktok />,
        title: "Perfil no Tiktok",
        description: "Vídeos e conteúdos sobre tecnologia",
        link: "https://www.tiktok.com/@opedro.sites",
    },
    {
        id: 5,
        icon: <FaLinkedin />,
        title: "Perfil no Linkedin",
        description: "Conecte-se comigo profissionalmente",
        link: "https://www.linkedin.com/in/pedro-cezarr/",
    },
    {
        id: 6,
        icon: <FaGithub />,
        title: "Perfil no Github",
        description: "Meus códigos e projetos open-source",
        link: "https://github.com/PedroCezardev",
    },
    {
        id: 7,
        icon: <FaShoppingCart />,
        title: "Loja Virtual",
        description: "Templates e produtos digitais",
        link: "#",
        isComingSoon: true
    },
    {
        id: 8,
        icon: <FaUserSecret />,
        title: "SaaS Misterioso",
        description: "Projeto secreto em desenvolvimento...",
        link: "#",
        isComingSoon: true
    }
]

const CardLinks = () => {
    useEffect(() => {
        AOS.init({
            duration: 600,
            offset: 50,
            once: true
        });
    }, []);

    return (
        <div className={style.container}>
            {CardList.map((data, i) => {
                const CardElement = data.isComingSoon ? "div" : "a";
                const cardProps = data.isComingSoon ? {} : { href: data.link, target: "_blank", rel: "noopener noreferrer" };

                return (
                    <CardElement key={data.id} className={`${style.content} ${data.isComingSoon ? style.comingSoon : ''} ${data.isHighlighted ? style.highlighted : ''}`} data-aos="fade-up" data-aos-delay={i * 100} {...cardProps}>
                        <div className={style.iconWrapper}>
                            {data.icon}
                        </div>
                        <div className={style.textWrapper}>
                            <h1>{data.title}</h1>
                            <p className={style.description}>{data.description}</p>
                        </div>
                        <div className={style.arrowWrapper}>
                            {data.isComingSoon ? (
                                <div className={style.comingSoonBadge}>Em breve</div>
                            ) : (
                                <MdOutlineArrowOutward className={style.arrowIcon} />
                            )}
                        </div>
                    </CardElement>
                )
            })}
        </div>
    );
}

export default CardLinks;
