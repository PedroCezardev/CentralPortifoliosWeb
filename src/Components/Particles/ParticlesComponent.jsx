import Particles, { initParticlesEngine } from "@tsparticles/react";
import { useEffect, useMemo} from "react";
// import { loadAll } from "@/tsparticles/all"; // if you are going to use `loadAll`, install the "@tsparticles/all" package too.
// import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
import { loadSlim } from "@tsparticles/slim"; // if you are going to use `loadSlim`, install the "@tsparticles/slim" package too.
// import { loadBasic } from "@tsparticles/basic"; // if you are going to use `loadBasic`, install the "@tsparticles/basic" package too.
import PropTypes from 'prop-types'; 

const ParticlesComponent = (props) => {
  
  // this should be run only once per application lifetime
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
      // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
      // starting from v2 you can add only the features you need reducing the bundle size
      //await loadAll(engine);
      //await loadFull(engine);
      await loadSlim(engine);
      //await loadBasic(engine);
    });
  }, []);

  const particlesLoaded = (container) => {
    console.log(container);
  };

  const options = useMemo(
    () => ({
      background: {
        color: { value: "#1A1C2F" },
      },
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: ["bubble", "push"], // Aplica os dois efeitos no clique
          },
          onHover: {
            enable: true,
            mode: "grab",
          },
        },
        modes: {
          bubble: {
            distance: 200,
            duration: 2,
            size: 8,
            opacity: 0.8,
          },
          push: {
            quantity: 5,
          },
          grab: {
            distance: 150,
          },
        },
      },
      particles: {
        color: { value: "#c3c3c3" },
        links: {
          color: "#d3d3d3",
          distance: 150,
          enable: true,
          opacity: 0.3,
          width: 1,
        },
        move: {
          direction: "none",
          enable: true,
          outModes: { default: "bounce" },
          random: true,
          speed: 1,
          straight: false,
        },
        number: {
          density: { enable: true },
          value: 150,
        },
        opacity: { value: 1.0 },
        shape: { type: "circle" },
        size: { value: { min: 1, max: 3 } },
      },
      detectRetina: true,
    }),
    [],
  );


  return <Particles id={props.id} init={particlesLoaded} options={options} />; 
};

ParticlesComponent.propTypes = {
  id: PropTypes.string.isRequired,
};

export default ParticlesComponent;